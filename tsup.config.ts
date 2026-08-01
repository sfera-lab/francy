import { defineConfig } from "tsup";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import type { Plugin } from "esbuild";

// esbuild has no built-in CSS Modules support, so this plugin does two things:
// 1. Turns `import styles from "./X.module.css"` into a JS object of scoped class names.
// 2. Collects the scoped CSS text so it can be concatenated into one dist/styles.css.
const collectedCss = new Map<string, string>();

function scopeIdFor(filePath: string) {
  return crypto.createHash("md5").update(filePath).digest("hex").slice(0, 6);
}

// tsup registers its own onLoad for every `*.css` file ahead of user
// esbuildPlugins (with an empty/wildcard namespace), so it always wins the
// module content for any path matching `/\.css$/` — even one resolved into
// a custom namespace. The only reliable way around it is to resolve
// `.module.css` imports to a virtual path that doesn't end in `.css` at all,
// so tsup's filter regex can never match it in the first place.
const VIRTUAL_SUFFIX = ".ui-css-module-js";

function cssModulesPlugin(): Plugin {
  return {
    name: "css-modules",
    setup(build) {
      build.onResolve({ filter: /\.module\.css$/ }, (args) => {
        const resolved = path.isAbsolute(args.path)
          ? args.path
          : path.resolve(args.resolveDir, args.path);
        return { path: resolved + VIRTUAL_SUFFIX, namespace: "ui-css-module" };
      });

      build.onLoad(
        { filter: /\.ui-css-module-js$/, namespace: "ui-css-module" },
        async (args) => {
          const realPath = args.path.slice(0, -VIRTUAL_SUFFIX.length);
          const source = await fs.promises.readFile(realPath, "utf8");
          const scopeId = scopeIdFor(realPath);
          const classNames = new Set<string>();
          const classRegex = /\.([a-zA-Z_-][a-zA-Z0-9_-]*)/g;
          let match: RegExpExecArray | null;
          while ((match = classRegex.exec(source))) {
            classNames.add(match[1]);
          }

          let scopedCss = source;
          const mapping: Record<string, string> = {};
          for (const cls of classNames) {
            const scoped = `${cls}_${scopeId}`;
            mapping[cls] = scoped;
            scopedCss = scopedCss.replace(
              new RegExp(`\\.${cls}(?![a-zA-Z0-9_-])`, "g"),
              `.${scoped}`
            );
          }

          collectedCss.set(realPath, scopedCss);

          return {
            contents: `export default ${JSON.stringify(mapping)};`,
            loader: "js",
            resolveDir: path.dirname(realPath),
          };
        }
      );
    },
  };
}

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: false,
  external: ["react", "react-dom"],
  esbuildPlugins: [cssModulesPlugin()],
  async onSuccess() {
    const tokens = await fs.promises.readFile(
      path.resolve("src/styles/tokens.css"),
      "utf8"
    );
    const reset = await fs.promises.readFile(
      path.resolve("src/styles/reset.css"),
      "utf8"
    );
    const combined = [tokens, reset, ...collectedCss.values()].join("\n\n");
    await fs.promises.mkdir("dist", { recursive: true });
    await fs.promises.writeFile(path.resolve("dist/styles.css"), combined, "utf8");
    console.log("✓ wrote dist/styles.css");
  },
});

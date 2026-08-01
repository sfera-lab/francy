import path from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/react-vite",
  viteFinal: async (viteConfig) => {
    viteConfig.base = process.env.STORYBOOK_BASE_PATH ?? "/";
    viteConfig.resolve = {
      ...viteConfig.resolve,
      alias: {
        ...viteConfig.resolve?.alias,
        "ui-engine": path.resolve(import.meta.dirname, "../src/index.ts"),
      },
    };
    return viteConfig;
  },
};
export default config;

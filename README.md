# ui-engine

A generic React component library built on [Radix UI](https://www.radix-ui.com/) primitives, with a default visual theme driven entirely by CSS custom properties. Behavior (accessibility, keyboard nav, focus management) comes from Radix; appearance is a thin, fully-overridable layer on top — no Tailwind or CSS framework required in your app.

## Install

```sh
npm install ui-engine
```

## Usage

```tsx
import { Button, Dialog, DialogContent, DialogTrigger } from "ui-engine";
import "ui-engine/styles.css";

function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>...</DialogContent>
    </Dialog>
  );
}
```

## Theming

Every visual value is a CSS custom property defined in `ui-engine/styles.css` under `:root` (light) and `[data-theme="dark"]` (dark). Override any subset in your own stylesheet, or toggle themes by setting `data-theme="dark"` on a container:

```css
:root {
  --ui-color-accent: #7c3aed;
}
```

```tsx
<div data-theme="dark">{/* renders with the dark palette */}</div>
```

Every component also accepts `className` and `style`, so you can override or extend styling per-instance without fighting the library's CSS.

## Components

- **Form**: `Button`, `Input`, `Textarea`, `Label`, `Checkbox`, `RadioGroup`/`RadioGroupItem`, `Select`, `Switch`, `FormField`
- **Layout & overlay**: `Dialog`, `Drawer`, `Tabs`, `Accordion`, `Tooltip`, `Popover`, `DropdownMenu`
- **Feedback & data**: `Toast`/`Toaster`/`useToast`/`toast()`, `Badge`, `Card`, `Table`, `Avatar`, `Progress`, `Spinner`

## Development

```sh
npm install
npm run dev        # playground app at http://localhost:5173, renders every component
npm run build       # tsup build -> dist/
npm test            # vitest
npm run typecheck   # tsc --noEmit
```

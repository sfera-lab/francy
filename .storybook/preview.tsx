import type { Decorator, Preview } from "@storybook/react-vite";
import "../src/styles/tokens.css";
import "../src/styles/reset.css";
import { Toaster, TooltipProvider } from "ui-engine";

const withThemeAndProviders: Decorator = (Story, context) => {
  const theme = context.globals.theme ?? "light";
  return (
    <TooltipProvider>
      <div data-theme={theme} style={{ padding: "1.5rem" }}>
        <Story />
      </div>
      <Toaster />
    </TooltipProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light", icon: "sun" },
          { value: "dark", title: "Dark", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [withThemeAndProviders],
};

export default preview;

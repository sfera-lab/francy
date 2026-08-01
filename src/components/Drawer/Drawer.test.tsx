import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "./Drawer";

describe("Drawer", () => {
  it("opens from the requested side", async () => {
    render(
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent side="left">
          <DrawerTitle>Filters</DrawerTitle>
        </DrawerContent>
      </Drawer>
    );

    await userEvent.click(screen.getByText("Open"));
    const title = await screen.findByText("Filters");
    expect(title.closest('[data-side="left"]')).toBeInTheDocument();
  });
});

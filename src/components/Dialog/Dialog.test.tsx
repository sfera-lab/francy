import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./Dialog";

describe("Dialog", () => {
  it("opens on trigger click and shows its title", async () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Confirm</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    expect(screen.queryByText("Confirm")).not.toBeInTheDocument();
    await userEvent.click(screen.getByText("Open"));
    expect(await screen.findByText("Confirm")).toBeInTheDocument();
  });
});

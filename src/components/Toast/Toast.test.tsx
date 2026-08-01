import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Toaster } from "./Toaster";
import { toast } from "./useToast";

describe("Toaster", () => {
  it("renders a toast queued imperatively via toast()", async () => {
    render(<Toaster />);

    act(() => {
      toast({ title: "Saved", description: "Your changes were saved." });
    });

    expect(await screen.findByText("Saved")).toBeInTheDocument();
    expect(screen.getByText("Your changes were saved.")).toBeInTheDocument();
  });
});

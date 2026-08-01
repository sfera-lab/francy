import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("accepts typed input", async () => {
    render(<Textarea aria-label="Bio" />);
    const textarea = screen.getByLabelText("Bio");
    await userEvent.type(textarea, "hello world");
    expect(textarea).toHaveValue("hello world");
  });
});

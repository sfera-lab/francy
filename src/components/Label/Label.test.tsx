import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Label } from "./Label";
import { Input } from "../Input";

describe("Label", () => {
  it("associates with its control via htmlFor", () => {
    render(
      <>
        <Label htmlFor="email">Email</Label>
        <Input id="email" />
      </>
    );
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });
});

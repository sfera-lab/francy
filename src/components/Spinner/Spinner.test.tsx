import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("exposes a status role for assistive tech", () => {
    render(<Spinner label="Loading results" />);
    expect(screen.getByRole("status", { name: "Loading results" })).toBeInTheDocument();
  });
});

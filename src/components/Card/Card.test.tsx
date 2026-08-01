import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card, CardContent, CardTitle } from "./Card";

describe("Card", () => {
  it("renders its composed sections", () => {
    render(
      <Card>
        <CardTitle>Plan</CardTitle>
        <CardContent>Details</CardContent>
      </Card>
    );

    expect(screen.getByText("Plan")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
  });
});

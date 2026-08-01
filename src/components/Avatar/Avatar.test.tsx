import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar, AvatarFallback } from "./Avatar";

describe("Avatar", () => {
  it("renders fallback initials", () => {
    render(
      <Avatar>
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText("AV")).toBeInTheDocument();
  });
});

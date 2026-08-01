import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

describe("Tabs", () => {
  it("switches panels when a tab is clicked", async () => {
    render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account panel</TabsContent>
        <TabsContent value="billing">Billing panel</TabsContent>
      </Tabs>
    );

    expect(screen.getByText("Account panel")).toBeVisible();
    await userEvent.click(screen.getByText("Billing"));
    expect(screen.getByText("Billing panel")).toBeVisible();
  });
});

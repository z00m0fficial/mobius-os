import { describe, it, expect } from "vitest";
import { buildServer } from "../src/server.js";

describe("MOS health", () => {
  it("returns ok", async () => {
    const app = await buildServer();
    const response = await app.inject({ method: "GET", url: "/health" });
    expect(response.statusCode).toBe(200);
    expect(response.json().status).toBe("ok");
  });
});

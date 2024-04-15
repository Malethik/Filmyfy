import { createApp } from "./app";

describe("given the function create app", () => {
  test("the it should be call and return a express app", () => {
    const app = createApp();
    expect(app).toBeDefined();
  });
});

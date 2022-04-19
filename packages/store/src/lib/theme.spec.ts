import theme from "./theme";

describe("Theme store", () => {
  it("should have default value of 'light'", () => {
    theme.subscribe((value) => {
      expect(value).toBe("light");
    });
  });
});

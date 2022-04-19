import theme from "./theme";

describe("Theme store", () => {
  it("should have default value of 'light'", () => {
    let current = "";

    theme.subscribe((value) => {
      current = value;
    });

    if (current) expect(current).toBe("light");
  });

  it("should be able to change theme", () => {
    let current = "";

    theme.subscribe((value) => {
      current = value;
    });

    theme.set("dark");

    if (current) expect(current).toBe("dark");
  });
});

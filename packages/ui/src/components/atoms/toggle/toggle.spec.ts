import Toggle from "./Toggle.svelte";
import { render, fireEvent } from "@testing-library/svelte";

describe("Toggle", () => {
  it("renders", () => {
    const { container } = render(Toggle);

    expect(container).toMatchSnapshot();
  });

  it("it should toggle checked value to 'true' when clicked once", async () => {
    const { getByTestId } = render(Toggle);

    const element = getByTestId("toggle");

    await fireEvent.click(element);

    expect(element.getAttribute("aria-checked")).toBe("true");
  });

  it("it should toggle checked value to 'false' when clicked twice", async () => {
    const { getByTestId } = render(Toggle);

    const element = getByTestId("toggle");

    await fireEvent.click(element);
    await fireEvent.click(element);

    expect(element.getAttribute("aria-checked")).toBe("false");
  });
});

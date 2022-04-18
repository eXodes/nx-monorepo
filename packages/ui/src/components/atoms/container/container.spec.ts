import Container from "./Container.svelte";
import { render } from "@testing-library/svelte";

describe("Container", () => {
  it("renders", () => {
    const { container } = render(Container);

    expect(container).toMatchSnapshot();
  });
});

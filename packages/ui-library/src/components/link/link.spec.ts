import Link from "./Link.svelte";
import { render } from "@testing-library/svelte";

describe("Link", () => {
  it("renders", () => {
    const { container } = render(Link, {
      props: {
        href: "https://link.test",
      },
    });

    expect(container).toMatchSnapshot();
  });

  it("should have href props defined", async () => {
    const { getByTestId } = render(Link, {
      props: {
        href: "https://link.test",
      },
    });

    const component = getByTestId("link");

    expect(component.getAttribute("href")).toContain("https://link.test");
  });
});

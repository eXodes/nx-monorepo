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

  it("renders with external icon", () => {
    const { container } = render(Link, {
      props: {
        href: "https://link.test",
        external: true,
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

  it("should open external link in a new tab", async () => {
    const { getByTestId } = render(Link, {
      props: {
        href: "https://link.test",
        external: true,
      },
    });

    const component = getByTestId("link");

    expect(component.getAttribute("target")).toContain("_blank");
  });
});

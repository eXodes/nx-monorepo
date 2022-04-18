import Title from "./Title.svelte";
import { render } from "@testing-library/svelte";

describe("Title", () => {
  it("renders", () => {
    const { container } = render(Title, {
      props: {
        name: "Title Name",
      },
    });

    expect(container).toMatchSnapshot();
  });

  it("should have name props defined", async () => {
    const { container } = render(Title, {
      props: {
        name: "Title Name",
      },
    });

    expect(container.textContent).toContain("Title Name");
  });
});

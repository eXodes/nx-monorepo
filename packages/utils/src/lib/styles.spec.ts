import { classNames } from "./styles";

describe("classNames", () => {
  it("should render array of class", () => {
    const testClass = "test-class";
    const specClass = "spec-class";

    expect(classNames(testClass, specClass)).toEqual(
      `${testClass} ${specClass}`
    );
  });

  it("should render class when true", () => {
    const condition = true;
    const classes = "test-class";

    expect(classNames(condition && classes)).toEqual(classes);
  });

  it("should not render class when false", () => {
    const condition = false;
    const classes = "test-class";

    expect(classNames(condition && classes)).toEqual("");
  });

  it("should not render class when undefined", () => {
    const classes = undefined;

    expect(classNames(classes)).toEqual("");
  });
});

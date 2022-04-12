export const classNames = (
  ...classes: (string | boolean | undefined)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

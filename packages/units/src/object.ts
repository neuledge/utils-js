export const isNonNullable = <
  T extends object | number | string | boolean | symbol,
>(
  item: T | null | undefined,
): item is T => item != null;

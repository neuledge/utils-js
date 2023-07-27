const BoolValues = {
  true: true,
  '1': true,
  yes: true,
  on: true,
};

export const bool = (val: string | undefined): boolean =>
  Object.prototype.hasOwnProperty.call(
    BoolValues,
    String(val || '')
      .toLowerCase()
      .trim(),
  );

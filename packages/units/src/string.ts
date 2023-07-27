export const SLUG_REGEXP = /^[\da-z]+(?:-[\da-z]+)*$/;

export const VAR_NAME_REGEXP = /^[_a-z]\w*$/i;

export const formatSlug = (input: string): string =>
  input
    .toLowerCase()
    .replaceAll(/[^\da-z]+/g, '-')
    .replaceAll(/^-|-$/g, '');

// eslint-disable-next-line import/no-default-export
module.exports = {
  plugins: ['@typescript-eslint', 'import', 'prefer-arrow'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',

    // Make sure this is always the last configuration in the extends array:
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'warn',
    'no-console': ['warn'],
    'no-fallthrough': 'warn',
    'no-warning-comments': ['warn', { terms: ['fixme'], location: 'start' }],
    'max-lines': [
      'warn',
      { max: 600, skipBlankLines: true, skipComments: true },
    ],
    'max-lines-per-function': [
      'warn',
      { max: 50, skipBlankLines: true, skipComments: true },
    ],
    'prefer-arrow-callback': 'warn',
    'arrow-body-style': 'warn',
    'prefer-arrow/prefer-arrow-functions': 'warn',
    'func-style': ['warn', 'expression', { allowArrowFunctions: true }],
    'import/no-cycle': 'error',
    'import/no-default-export': 'warn',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '.',
            message:
              'Import from current folder is forbidden, please import from a specific file name.',
          },
        ],
        patterns: [
          {
            group: ['../../../*'],
            message:
              'Relative path is too long, please use package root "@" instead.',
          },
          {
            group: ['@/../../*'],
            message:
              'Please import package from "@neuledge" namespace instead.',
          },
          {
            group: ['@neuledge/*/lib'],
            message: 'Avoid importing the "lib" folder directly.',
          },
        ],
      },
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    'unicorn/explicit-length-check': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
  },
};

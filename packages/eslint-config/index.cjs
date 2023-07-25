module.exports = {
  plugins: ['@typescript-eslint', 'import', 'prefer-arrow'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [
    'dist',
    'node_modules',
    '__ignore__',
    '*.codegen.ts',
    '*.codegen.js',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',

    // Make sure this is always the last configuration in the extends array:
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['__test__/**', '*.test.*'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
    },
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
            group: ['./*/index', '../*/index', '@/*/index'],
            message:
              'Avoid importing the "index" file directly, please import the file directory instead.',
          },
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
            group: ['@neuledge/*/lib', '@neuledge/*/dist'],
            message: 'Avoid importing generated folders.',
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

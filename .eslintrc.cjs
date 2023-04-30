module.exports = {
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
        groups: ['builtin', 'external', 'internal', ['index', 'object'], 'parent', 'sibling', 'type'],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal',
          },
          {
            pattern: './**/*.scss',
            group: 'type',
          },
          {
            pattern: '../**/*.scss',
            group: 'type',
          },
        ],
      },
    ],
  },
};

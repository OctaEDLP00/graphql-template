module.exports = {
  printWidth: 100,
  semi: false,
  singleQuotes: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: true,
  endOfLine: 'lf',
  bracketSpacing: true,
  quotesProps: true,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'css',
  overrides: [
    {
      files: ['*.json','*.toml','*.yaml','*.md'],
      options: {
        useTabs: false
      }
    }
  ]
}

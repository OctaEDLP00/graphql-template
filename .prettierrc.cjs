module.exports = {
  printWidth: 100,
  semi: false,
  singleQuotes: true,
  jsxSinglesQuotes: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: true,
  endOfLine: 'lf',
  bracketSpacing: true,
  quotesProps: true,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'css',
  jsxBracketSameLine: false,
  overrides: [
    {
      files: ['*.json','*.toml','*.yaml','*.md'],
      options: {
        useTabs: false
      }
    }
  ]
}

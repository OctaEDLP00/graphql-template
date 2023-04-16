const RULES = {
  OFF: 'off',
  ON: 'on',
  ERROR: 'error',
  WARN: 'warn'
}

module.exports = {
  extends: [
    'standard'
  ],
  rules: {
    'no-tabs': RULES.OFF,
    ident: RULES.OFF,
    'space-before-function-paren': RULES.OFF
  }
}

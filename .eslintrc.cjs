const { RULES } = require('./rules.js');

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

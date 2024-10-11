module.exports = {
  extends: [
    'stylelint-config-idiomatic-order',
    'stylelint-config-standard-scss',
    'stylelint-config-sass-guidelines',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'layer',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  },
}

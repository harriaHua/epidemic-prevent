/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-30 11:54:51
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-30 13:00:29
 */
module.exports = {
  root: true,
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    ,
  ],
  rules: {
    // 'at-rule-no-unknown': true,
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always-single-line',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['include', 'mixin'],
      },
    ],
    'rule-empty-line-before': ['never'],
  },
}

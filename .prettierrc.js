/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-08 19:19:43
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-15 22:59:51
 */
module.exports = {
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  printWidth: 100,
  singleQuote: true,
  semi: false,
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
}

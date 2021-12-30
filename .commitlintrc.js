/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-30 11:28:36
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-30 15:46:26
 */
module.exports = {
  extends: ['gitmoji'],
  rules: {
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}

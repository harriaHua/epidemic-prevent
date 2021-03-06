/**
 * @Description:
 * @Version: 0.1
 * @Author: Harria
 * @Date: 2021-12-30 14:17:41
 * @LastEditors: Harria
 * @LastEditTime: 2021-12-30 15:32:21
 */

module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: 'â¨ feat: æ°åè½',
    },
    {
      value: ':bug: fix',
      name: 'ð fix: ä¿®å¤bug',
    },
    {
      value: ':fire: remove',
      name: 'ð¥ remove: ç§»é¤ä»£ç ææä»¶',
    },
    {
      value: ':memo: docs',
      name: 'ð docs: ææ¡£åæ´',
    },
    {
      value: ':wrench: config',
      name: 'ð§ config: ä¿®æ¹éç½®æä»¶',
    },
    {
      value: ':art: style',
      name: 'ð¨ style: æ¹è¿ä»£ç ç»æ/ä»£ç æ ¼å¼',
    },

    {
      value: ':lipstick: design',
      name: 'ð design: æ´æ° UI åæ ·å¼æä»¶',
    },
    {
      value: ':recycle: refactor',
      name: 'â»ï¸ refactor: éæä»£ç ï¼çè®ºä¸ä¸å½±åç°æåè½',
    },
    {
      value: ':zap: perf',
      name: 'â¡ï¸ perf: ä¼åç¸å³ï¼å¦æåæ§è½ãç¨æ·ä½éª',
    },
    {
      value: ':tada: init',
      name: 'ð init: åå§å',
    },
    {
      value: ':white_check_mark: test',
      name: 'â test: æµè¯ç¨ä¾ï¼åæ¬ååæµè¯ãéææµè¯',
    },
    {
      value: ':rewind: revert',
      name: 'âª revert: åé',
    },
    {
      value: ':package: build',
      name: 'ð¦ build: æå',
    },
    {
      value: ':rocket: chore',
      name: 'ð chore: ä¿®æ¹å·¥å·ç¸å³ï¼åæ¬ä½ä¸éäºææ¡£ãä»£ç çæç­ï¼',
    },
    {
      value: ':green_heart: ci',
      name: 'ð ci: CI related changes',
    },
  ],
  messages: {
    type: 'è¯·éæ©æäº¤ç±»å(å¿å¡«)',
    customScope: 'è¯·è¾å¥æä»¶ä¿®æ¹èå´(å¯é)',
    subject: 'è¯·ç®è¦æè¿°æäº¤(å¿å¡«)',
    body: 'è¯·è¾å¥è¯¦ç»æè¿°(å¯é)',
    breaking: 'ååºä»»ä½BREAKING CHANGES(å¯é)',
    footer: 'è¯·è¾å¥è¦å³é­çissue(å¯é)',
    confirmCommit: 'ç¡®å®æäº¤æ­¤è¯´æåï¼',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // å½æäº¤ç±»åä¸ºfeatãfixæ¶ææç ´åæ§ä¿®æ¹éé¡¹
  subjectLimit: 72,
}

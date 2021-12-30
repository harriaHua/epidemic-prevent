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
      name: '✨ feat: 新功能',
    },
    {
      value: ':bug: fix',
      name: '🐛 fix: 修复bug',
    },
    {
      value: ':fire: remove',
      name: '🔥 remove: 移除代码或文件',
    },
    {
      value: ':memo: docs',
      name: '📝 docs: 文档变更',
    },
    {
      value: ':wrench: config',
      name: '🔧 config: 修改配置文件',
    },
    {
      value: ':art: style',
      name: '🎨 style: 改进代码结构/代码格式',
    },

    {
      value: ':lipstick: design',
      name: '💄 design: 更新 UI 和样式文件',
    },
    {
      value: ':recycle: refactor',
      name: '♻️ refactor: 重构代码，理论上不影响现有功能',
    },
    {
      value: ':zap: perf',
      name: '⚡️ perf: 优化相关，如提升性能、用户体验',
    },
    {
      value: ':tada: init',
      name: '🎉 init: 初始化',
    },
    {
      value: ':white_check_mark: test',
      name: '✅ test: 测试用例，包括单元测试、集成测试',
    },
    {
      value: ':rewind: revert',
      name: '⏪ revert: 回退',
    },
    {
      value: ':package: build',
      name: '📦 build: 打包',
    },
    {
      value: ':rocket: chore',
      name: '🚀 chore: 修改工具相关（包括但不限于文档、代码生成等）',
    },
    {
      value: ':green_heart: ci',
      name: '💚 ci: CI related changes',
    },
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // 当提交类型为feat、fix时才有破坏性修改选项
  subjectLimit: 72,
}

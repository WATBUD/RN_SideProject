/* eslint-disable no-undef */
module.exports = {
  root: true, // 根目錄的設定文件
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  plugins: ['@typescript-eslint', 'prettier'], // 使用的插件
  extends: [
    'eslint:recommended', // ESLint 推薦的規則
    'plugin:@typescript-eslint/recommended', // TypeScript 相關的推薦規則
    'plugin:prettier/recommended', // Prettier 推薦的規則
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ], // 要求符合 Prettier 的排版風格
  },
}

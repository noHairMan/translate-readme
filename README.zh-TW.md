# 翻譯自述文件操作

## 自述文件翻譯

-   [英語](README.md)
-   [簡體中文](README.zh-CN.md)
-   [繁體中文](README.zh-TW.md)
-   [印地語](README.hi.md)
-   [法語](README.fr.md)
-   [阿拉伯](README.ar.md)

**GitHub Action 將自述文件翻譯成任何語言**

這是一個 GitHub Action，可自動將儲存庫中的自述文件翻譯為指定語言。

_提交給[DEV：開源的 GitHub 行動！](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)黑客松_

## 設定

1.  **新增工作流程文件**到您的專案（例如`.github/workflows/readme.yml`):

```yaml
name: Translate README

on:
  push:
    branches:
      - main
      - master
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
      # ISO Langusge Codes: https://cloud.google.com/translate/docs/languages  
      - name: Adding README - Chinese Simplified
        uses: dephraiim/translate-readme@main
        with:
          LANG: zh-CN
          OUTPUT_DIR: "docs"
          OUTPUT_FILE: "readme.${lang}.md"
      - name: Adding README - Chinese Traditional
        uses: dephraiim/translate-readme@main
        with:
          LANG: zh-TW
          OUTPUT_DIR: "."
          OUTPUT_FILE: "README.${lang}.md"
      - name: Adding README - Hindi
        uses: dephraiim/translate-readme@main
        with:
          LANG: hi
      - name: Adding README - Arabic
        uses: dephraiim/translate-readme@main
        with:
          LANG: ar
      - name: Adding README - French
        uses: dephraiim/translate-readme@main
        with:
          LANG: fr
```

我也沒有做過HS

## 配置

### 選項

您可以使用以下選項進一步配置操作：

-   `LANG`：您要將自述文件翻譯成的語言。預設為簡體中文。 （我是加納人）支持的語言可以在下面找到。
    (預設:`zh-CH`） （必需的：`false`)

-   `OUTPUT_DIR`：要保存翻译后的自述文件的目录。預設為根目錄。 (預設:`.`） （必需的：`false`)

-   `OUTPUT_FILE`：翻譯後的自述文件的名稱。預設為`README.${lang}.md`。 (預設:`README.${lang}.md`） （必需的：`false`)\`

## 支援的語言

Languages supported can be found here <https://cloud.google.com/translate/docs/languages>

### 問題

查看[這裡](https://github.com/dephraiim/translate-readme/issues/1)對於與此操作相關的問題。

### 發展

Suggestions and contributions are always welcome!

### 執照

[和](./LICENSE)

# 翻译自述文件操作

## 自述文件翻译

-   [英语](README.md)
-   [简体中文](README.zh-CN.md)
-   [繁体中文](README.zh-TW.md)
-   [印地语](README.hi.md)
-   [法语](README.fr.md)
-   [阿拉伯](README.ar.md)

**GitHub Action 将自述文件翻译成任何语言**

这是一个 GitHub Action，可自动将存储库中的自述文件翻译为指定语言。

_提交给[DEV：开源的 GitHub 行动！](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)黑客马拉松_

## 设置

1.  **添加工作流程文件**到您的项目（例如`.github/workflows/readme.yml`):

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

我也没有做过HS

## 配置

### Options

您可以使用以下选项进一步配置操作：

-   `LANG`：您要将自述文件翻译成的语言。默认为简体中文。 （我是加纳人）支持的语言可以在下面找到。
    （默认：`zh-CH`） （必需的：`false`)

-   `OUTPUT_DIR`：要保存翻译后的自述文件的目录。默认为根目录。 （默认：`.`） （必需的：`false`)

-   `OUTPUT_FILE`：翻译后的自述文件的名称。默认为`README.${lang}.md`。 （默认：`README.${lang}.md`） （必需的：`false`)\`

## 支持的语言

可以在此处找到支持的语言<https://cloud.google.com/translate/docs/languages>

### 问题

查看[这里](https://github.com/dephraiim/translate-readme/issues/1) for issues related to this action.

### 发展

随时欢迎提出建议和贡献！

### 执照

[和](./LICENSE)

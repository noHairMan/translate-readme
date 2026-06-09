# ترجمة الإجراء التمهيدي

## اقرأني الترجمة

-   [إنجليزي](README.md)
-   [الصينية المبسطة](README.zh-CN.md)
-   [الصينية التقليدية](README.zh-TW.md)
-   [الهندية](README.hi.md)
-   [فرنسي](README.fr.md)
-   [عربى](README.ar.md)

**إجراء GitHub لترجمة الملف التمهيدي إلى أي لغة**

هذا هو إجراء GitHub الذي يقوم تلقائيًا بترجمة الملف التمهيدي في الريبو الخاص بك إلى لغة محددة.

_تقديم ل[DEV: إجراءات GitHub للمصدر المفتوح!](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)hackathon_

## يثبت

1.  **إضافة ملف سير العمل**لمشروعك (على سبيل المثال`.github/workflows/readme.yml`):

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

لم أكن HS alse

## إعدادات

### خيارات

يمكنك تكوين الإجراء بشكل أكبر باستخدام الخيارات التالية:

-   `LANG`: اللغة التي تريد ترجمة الملف التمهيدي إليها. الافتراضي هو الصينية المبسطة. (أنا غاني) يمكن العثور على اللغات المدعومة أدناه.
    (تقصير:`zh-CH`) (مطلوب:`false`)

-   `OUTPUT_DIR`: الدليل الذي تريد حفظ الملف التمهيدي المترجم فيه. الافتراضي هو الدليل الجذر. (تقصير:`.`) (مطلوب:`false`)

-   `OUTPUT_FILE`: اسم الملف التمهيدي المترجم. الافتراضي هو`README.${lang}.md`. (تقصير:`README.${lang}.md`) (مطلوب:`false`)\`

## اللغات المدعومة

اللغات المدعومة يمكن العثور عليها هنا<https://cloud.google.com/translate/docs/languages>

### مشاكل

يفحص[هنا](https://github.com/dephraiim/translate-readme/issues/1)للقضايا المتعلقة بهذا الإجراء.

### تطوير

الاقتراحات والمساهمات هي موضع ترحيب دائما!

### رخصة

[مع](./LICENSE)

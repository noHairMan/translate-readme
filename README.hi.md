# रीडमी एक्शन का अनुवाद करें

## रीडमी अनुवाद

-   [अंग्रेज़ी](README.md)
-   [सरलीकृत चीनी](README.zh-CN.md)
-   [परंपरागत चीनी](README.zh-TW.md)
-   [हिंदी](README.hi.md)
-   [फ़्रेंच](README.fr.md)
-   [अरब](README.ar.md)

**रीडमी को किसी भी भाषा में अनुवाद करने के लिए GitHub एक्शन**

यह एक GitHub क्रिया है जो स्वचालित रूप से आपके रेपो में रीडमी को एक निर्दिष्ट भाषा में अनुवादित करती है।

_के लिए एक सबमिशन[DEV: ओपन सोर्स के लिए GitHub क्रियाएँ!](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)आयोजित हैकथॉन_

## स्थापित करना

1.  **वर्कफ़्लो फ़ाइल जोड़ें**आपके प्रोजेक्ट के लिए (उदा.`.github/workflows/readme.yml`):

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

मैं भी एचएस नहीं रहा हूं

## विन्यास

### विकल्प

आप निम्नलिखित विकल्पों के साथ कार्रवाई को आगे कॉन्फ़िगर कर सकते हैं:

-   `LANG`: वह भाषा जिसमें आप अपने रीडमी का अनुवाद करना चाहते हैं। डिफ़ॉल्ट सरलीकृत चीनी है. (मैं घाना का निवासी हूं) समर्थित भाषाएं नीचे पाई जा सकती हैं।
    (गलती करना:`zh-CH`) (आवश्यक:`false`)

-   `OUTPUT_DIR`: वह निर्देशिका जहां आप अनुवादित रीडमी को सहेजना चाहते हैं। डिफ़ॉल्ट रूट निर्देशिका है. (गलती करना:`.`) (आवश्यक:`false`)

-   `OUTPUT_FILE`: The name of the translated readme. The default is `README.${lang}.md`. (गलती करना:`README.${lang}.md`) (आवश्यक:`false`)\`

## समर्थित भाषाएँ

समर्थित भाषाएँ यहाँ पाई जा सकती हैं<https://cloud.google.com/translate/docs/languages>

### समस्याएँ

जाँच करना[यहाँ](https://github.com/dephraiim/translate-readme/issues/1)इस कार्रवाई से संबंधित मुद्दों के लिए.

### विकास

सुझावों और योगदानों का हमेशा स्वागत है!

### लाइसेंस

[साथ](./LICENSE)

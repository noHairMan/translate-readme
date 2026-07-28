# Traduire l’action Lisez-moi

## Traduction du fichier README

-   [Anglais](README.md)
-   [Chinois simplifié](README.zh-CN.md)
-   [Chinois traditionnel](README.zh-TW.md)
-   [hindi](README.hi.md)
-   [Française](README.fr.md)
-   [arabe](README.ar.md)

**GitHub Action pour traduire Readme dans n'importe quelle langue**

Il s'agit d'une action GitHub qui traduit automatiquement le fichier Lisez-moi de votre dépôt dans une langue spécifiée.

_Une soumission pour le[DEV : Actions GitHub pour l'Open Source !](https://dev.to/devteam/announcing-the-github-actions-hackathon-on-dev-3ljn)hackathon_

## Installation

1.  **Ajouter un fichier de workflow**à votre projet (par ex.`.github/workflows/readme.yml`):

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
      - uses: actions/checkout@v6
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node.js
        uses: actions/setup-node@v6
        with:
          node-version: 18.x
      
      # ISO Langusge Codes: https://cloud.google.com/translate/docs/languages  
      - name: Adding README - Chinese Simplified
        uses: noHairMan/translate-readme@main
        with:
          LANG: zh-CN
          README_PATH: "docs/README.md"
          OUTPUT_DIR: "docs"
          OUTPUT_FILE: "readme.${lang}.md"
      - name: Adding README - Chinese Traditional
        uses: noHairMan/translate-readme@main
        with:
          LANG: zh-TW
          OUTPUT_DIR: "."
          OUTPUT_FILE: "README.${lang}.md"
      - name: Adding README - Hindi
        uses: noHairMan/translate-readme@main
        with:
          LANG: hi
      - name: Adding README - Arabic
        uses: noHairMan/translate-readme@main
        with:
          LANG: ar
      - name: Adding README - French
        uses: noHairMan/translate-readme@main
        with:
          LANG: fr
```

je n'ai pas été HS non plus

## Configuration

### Possibilités

Vous pouvez configurer davantage l'action avec les options suivantes :

-   `LANG`: La langue dans laquelle vous souhaitez traduire votre fichier Lisez-moi. La valeur par défaut est le chinois simplifié. (Je suis ghanéen) Les langues prises en charge se trouvent ci-dessous.
    (défaut:`zh-CH`) (requis:`false`)

-   `OUTPUT_DIR`: Le répertoire dans lequel vous souhaitez enregistrer le fichier readme traduit. La valeur par défaut est le répertoire racine. (défaut:`.`) (requis:`false`)

-   `OUTPUT_FILE`: Le nom du fichier readme traduit. La valeur par défaut est`README.${lang}.md`. (défaut:`README.${lang}.md`) (requis:`false`)\`

-   `README_PATH`: Le chemin d'accès au fichier README, ou à un répertoire contenant`readme.md`ou`README.md`. La valeur par défaut est la racine du référentiel. (défaut:`.`) (requis:`false`)

## Langues prises en charge

Les langues prises en charge peuvent être trouvées ici<https://cloud.google.com/translate/docs/languages>

### Problèmes

Vérifier[ici](https://github.com/dephraiim/translate-readme/issues/1)pour les problèmes liés à cette action.

### Développement

Les suggestions et contributions sont toujours les bienvenues !

### LICENCE

[AVEC](./LICENSE)

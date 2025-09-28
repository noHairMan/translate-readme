const { readFileSync, writeFileSync, readdirSync } = require("fs");
const { join } = require("path");
const core = require("@actions/core");
const translate = require("@iamtraction/google-translate");
const unified = require("unified");
const parse = require("remark-parse");
const stringify = require("remark-stringify");
const visit = require("unist-util-visit");
const simpleGit = require("simple-git");
const git = simpleGit();

const toAst = (markdown) => {
    return unified().use(parse).parse(markdown);
};

const toMarkdown = (ast) => {
    return unified().use(stringify).stringify(ast);
};

const mainDir = ".";
let README = readdirSync(mainDir).includes("readme.md")
    ? "readme.md"
    : "README.md";
const replaceLanguagePlaceholder = (template, lang) => {
    return template.replace(/\$\{lang\}/g, lang);
};

const lang = core.getInput("LANG") || "zh-CN";
const outputDir = core.getInput("OUTPUT_DIR") || ".";
const outputFile = core.getInput("OUTPUT_FILE") || "README.${lang}.md";
const readme = readFileSync(join(mainDir, README), { encoding: "utf8" });
const readmeAST = toAst(readme);
console.log("AST CREATED AND READ");

let originalText = [];

visit(readmeAST, async (node) => {
    if (node.type === "text") {
        originalText.push(node.value);
        const result = await translate(node.value, { to: lang });
        node.value = result.text;
    }
});

const translatedText = originalText.map(async (text) => {
    const result = await translate(text, { to: lang });
    return result.text;
});

async function writeToFile() {
    await Promise.all(translatedText);
    writeFileSync(
        join(outputDir, replaceLanguagePlaceholder(outputFile, lang)),
        toMarkdown(readmeAST),
        "utf8"
    );
    console.log(`README.${lang}.md written`);
}

async function commitChanges(lang) {
    console.log("commit started");
    await git.add("./*");
    await git.addConfig("user.name", "github-actions[bot]");
    await git.addConfig(
        "user.email",
        "41898282+github-actions[bot]@users.noreply.github.com"
    );
    await git.commit(
        `docs: Added README."${lang}".md translation via https://github.com/dephraiim/translate-readme`
    );
    console.log("finished commit");
    await git.push();
    console.log("pushed");
}

async function translateReadme() {
    try {
        await writeToFile();
        await commitChanges(lang);
        console.log("Done");
    } catch (error) {
        throw new Error(error);
    }
}

translateReadme();
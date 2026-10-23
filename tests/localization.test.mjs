import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

async function loadData(name) {
  const source = readFileSync(new URL(`../src/data/${name}.ts`, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext },
  });
  return import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
}

const { zhCN } = await loadData("zh-CN");

function assertTranslated(text) {
  assert.ok(Object.hasOwn(zhCN, text), `Missing Chinese translation: ${text}`);
  assert.match(zhCN[text], /[\u3400-\u9fff]/, `Empty or non-Chinese translation: ${text}`);
}

test("Chinese translations cover all descriptive data and UI translation calls", async () => {
  const fields = {
    projects: { projects: ["subtitle", "description", "status"] },
    skills: { skills: ["category", "title", "description"] },
    timeline: { timeline: ["period", "title", "subtitle", "description"] },
    personal: { languages: ["name", "level"], interests: ["title", "description"] },
  };

  for (const [file, collections] of Object.entries(fields)) {
    const data = await loadData(file);
    for (const [collection, keys] of Object.entries(collections)) {
      for (const item of data[collection]) {
        for (const key of keys) {
          // Dates and the declared CEFR level are identical in both languages.
          if (item[key] === "B2" || /^[\d\s-]+$/.test(item[key])) continue;
          assertTranslated(item[key]);
        }
      }
    }
  }

  const sourceRoot = new URL("../src/", import.meta.url);
  for (const file of readdirSync(sourceRoot, { recursive: true })) {
    if (!file.endsWith(".tsx")) continue;
    const source = ts.createSourceFile(file, readFileSync(new URL(file.replaceAll("\\", "/"), sourceRoot), "utf8"), ts.ScriptTarget.Latest, true);
    function visit(node) {
      if (ts.isCallExpression(node) && node.expression.getText(source) === "t" && ts.isStringLiteral(node.arguments[0])) {
        assertTranslated(node.arguments[0].text);
      }
      // About statistics are translated at render time, outside literal t() calls.
      if (file.endsWith("About.tsx") && ts.isPropertyAssignment(node) && ["label", "description"].includes(node.name.getText(source)) && ts.isStringLiteral(node.initializer)) {
        assertTranslated(node.initializer.text);
      }
      ts.forEachChild(node, visit);
    }
    visit(source);
  }
});

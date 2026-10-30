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
    skillConnections: { certifications: ["label", "kind", "description"] },
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

test("skill connections reference existing skills and projects, with distinct public credentials", async () => {
  const { skills } = await loadData("skills");
  const { projects } = await loadData("projects");
  const { certifications, projectSkillIds } = await loadData("skillConnections");
  const skillIds = new Set(skills.map((skill) => skill.id));
  assert.equal(skillIds.size, skills.length, "Skill IDs must be unique");
  const projectNames = new Set(projects.map((project) => project.title));
  const coveredSkills = new Set();

  for (const [project, ids] of Object.entries(projectSkillIds)) {
    assert.ok(projectNames.has(project), `Unknown project: ${project}`);
    assert.ok(ids.length > 0, `Missing skill connections: ${project}`);
    assert.equal(new Set(ids).size, ids.length, `Duplicate connection: ${project}`);
    for (const id of ids) {
      assert.ok(skillIds.has(id), `Unknown skill: ${id}`);
      coveredSkills.add(id);
    }
  }
  assert.deepEqual(coveredSkills, skillIds, "Every skill needs project evidence");

  assert.equal(new Set(certifications.map((certificate) => certificate.id)).size, certifications.length);
  assert.equal(new Set(certifications.map((certificate) => certificate.url)).size, certifications.length);
  for (const certificate of certifications) {
    assert.equal(new URL(certificate.url).protocol, "https:");
    // Credentials outside the six project-backed domains are displayed as complementary certificates.
    for (const id of certificate.skillIds) assert.ok(skillIds.has(id), `Unknown certificate skill: ${id}`);
    if (certificate.issuedOn) assert.match(certificate.issuedOn, /^\d{4}-\d{2}(-\d{2})?$/);
    if (certificate.expiresOn) {
      assert.match(certificate.expiresOn, /^\d{4}-\d{2}-\d{2}$/);
      assert.ok(certificate.expiresOn > certificate.issuedOn, "Expiration must follow issue date");
    }
  }
});

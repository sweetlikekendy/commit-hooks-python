module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "type-enum": [
      2, // level: 0 - disable, 1 - warning, 2 - error
      "always", // applicable: always | never
      [
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
}

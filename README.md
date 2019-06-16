# eslint-plugin-web

wip: Additional ESLint's rules for web.

## 💿 Install & Usage

```
$ npm install --save-dev eslint eslint-plugin-web
```

- Requires Node.js `>=8.10.0`
- Requires ESLint `>=5.16.0`

**.eslintrc.json** (An example)

```json
{
    "extends": [
        "plugin:web/all"
    ]
}
```

## 📖 Rules

- ⭐️ - the mark of recommended rules.
- ✒️ - the mark of fixable rules.

<!--RULES_TABLE_START-->
TBF.
<!--RULES_TABLE_END-->

## 🔧 Configs

TBF.

## 👫 FAQ

TBF.

## 🚥 Semantic Versioning Policy

`eslint-plugin-web` follows [semantic versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

- Patch release (intended to not break your lint build)
    - A bug fix in a rule that results in it reporting fewer errors.
    - Improvements to documentation.
    - Non-user-facing changes such as refactoring code, adding, deleting, or modifying tests, and increasing test coverage.
    - Re-releasing after a failed release (i.e., publishing a release that doesn't work for anyone).
- Minor release (might break your lint build)
    - A bug fix in a rule that results in it reporting more errors.
    - A new rule is created.
    - A new option to an existing rule is created.
    - An existing rule is deprecated.
- Major release (likely to break your lint build)
    - A support for old Node version is dropped.
    - A support for old ESLint version is dropped.
    - An existing rule is changed in it reporting more errors.
    - An existing rule is removed.
    - An existing option of a rule is removed.
    - An existing config is updated.

## 📰 Changelog

TBF.

## 💎 Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

- `npm test` runs tests and measures coverage.
- `npm run coverage` shows the coverage result of `npm test` command.
- `npm run clean` removes the coverage result of `npm test` command.

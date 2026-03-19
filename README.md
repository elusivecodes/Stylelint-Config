# Frost Stylelint Config

[![CI](https://github.com/elusivecodes/Stylelint-Config/actions/workflows/ci.yml/badge.svg)](https://github.com/elusivecodes/Stylelint-Config/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/%40fr0st/stylelint-config)](https://www.npmjs.com/package/@fr0st/stylelint-config)
[![npm downloads](https://img.shields.io/npm/dm/%40fr0st/stylelint-config)](https://www.npmjs.com/package/@fr0st/stylelint-config)
[![License](https://img.shields.io/npm/l/%40fr0st/stylelint-config)](./LICENSE)

Stylelint shareable config for the *Frost* style.


## Installation

```bash
npm i -D @fr0st/stylelint-config stylelint
```


## Usage

Create `stylelint.config.js`:

```js
export default {
    extends: ['@fr0st/stylelint-config'],
};
```

The shared config supports both CSS and SCSS. SCSS-specific rules are applied to `**/*.scss`.

## Compatibility

- Node.js: `>=20.19.0`
- Stylelint: `^17.4.0`
- File types: CSS and SCSS

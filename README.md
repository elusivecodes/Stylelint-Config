# Frost Stylelint Config

Stylelint shareable config for the *Frost* style.


## Installation

```bash
npm i -D stylelint @fr0st/stylelint-config
```


## Usage

Create `stylelint.config.js`:

```js
export default {
    extends: ['@fr0st/stylelint-config'],
};
```

The shared config supports both CSS and SCSS. SCSS-specific rules are applied to `**/*.scss`.

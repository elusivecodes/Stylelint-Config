export default {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recess-order',
        '@stylistic/stylelint-config',
    ],
    rules: {
        '@stylistic/at-rule-name-space-after': 'always',
        '@stylistic/at-rule-semicolon-space-before': 'never',
        '@stylistic/block-closing-brace-empty-line-before': null,
        '@stylistic/block-closing-brace-newline-after': null,
        '@stylistic/block-opening-brace-space-before': null,
        '@stylistic/declaration-block-semicolon-newline-before': 'never-multi-line',
        '@stylistic/indentation': 4,
        '@stylistic/max-empty-lines': 2,
        '@stylistic/max-line-length': null,
        '@stylistic/number-leading-zero': 'never',
        '@stylistic/selector-list-comma-newline-before': 'never-multi-line',
        '@stylistic/selector-list-comma-space-after': 'always-single-line',
        '@stylistic/selector-list-comma-space-before': 'never-single-line',
        '@stylistic/string-quotes': 'double',
        '@stylistic/unicode-bom': 'never',
        '@stylistic/value-list-comma-newline-after': 'never-multi-line',
        '@stylistic/value-list-comma-newline-before': 'never-multi-line',
        '@stylistic/value-list-comma-space-after': 'always',
        'alpha-value-notation': null,
        'at-rule-empty-line-before': null,
        'color-function-alias-notation': null,
        'color-function-notation': null,
        'color-named': 'never',
        'custom-property-empty-line-before': null,
        'custom-property-pattern': null,
        'declaration-block-no-redundant-longhand-properties': null,
        'declaration-empty-line-before': null,
        'declaration-no-important': null,
        'font-weight-notation': [
            'numeric',
            {
                ignore: [
                    'relative',
                ],
            },
        ],
        'function-url-no-scheme-relative': true,
        'media-feature-range-notation': null,
        'media-query-no-invalid': null,
        'no-descending-specificity': null,
        'number-max-precision': null,
        'rule-empty-line-before': null,
        'selector-max-attribute': 2,
        'selector-max-class': 4,
        'selector-max-combinators': 4,
        'selector-max-compound-selectors': 4,
        'selector-max-id': 0,
        'selector-max-specificity': null,
        'selector-max-type': 2,
        'selector-max-universal': 2,
        'selector-no-qualifying-type': [
            true,
            {
                ignore: [
                    'attribute',
                ],
            },
        ],
        'selector-not-notation': null,
        'scss/at-function-named-arguments': null,
    },
    overrides: [
        {
            files: '**/*.scss',
            extends: [
                'stylelint-config-standard-scss',
                'stylelint-config-recess-order',
            ],
            rules: {
                "declaration-property-value-no-unknown": null,
                'no-invalid-position-at-import-rule': null,
                'scss/at-extend-no-missing-placeholder': null,
                'scss/at-if-closing-brace-newline-after': null,
                'scss/at-if-closing-brace-space-after': null,
                'scss/at-if-no-null': null,
                'scss/at-mixin-argumentless-call-parentheses': 'always',
                'scss/at-mixin-pattern': null,
                'scss/at-rule-conditional-no-parentheses': null,
                'scss/comment-no-empty': null,
                "scss/declaration-property-value-no-unknown": true,
                'scss/dimension-no-non-numeric-values': true,
                'scss/dollar-variable-colon-space-after': 'at-least-one-space',
                'scss/dollar-variable-empty-line-before': null,
                'scss/double-slash-comment-empty-line-before': null,
                'scss/double-slash-comment-whitespace-inside': null,
                'scss/function-quote-no-quoted-strings-inside': null,
                'scss/media-feature-value-dollar-variable': null,
                'scss/no-global-function-names': null,
                'scss/selector-no-redundant-nesting-selector': true,
            },
        },
    ],
};

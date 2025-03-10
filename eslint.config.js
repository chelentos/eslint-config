const eslintrc = require('@eslint/eslintrc');
const js = require('@eslint/js');
const globals = require('globals');

const compat = new eslintrc.FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

module.exports = [
    ...compat.extends('./index.js', './import-order.js', './prettier.js'),
    {
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
];

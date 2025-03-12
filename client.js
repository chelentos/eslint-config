const globals = require('globals');

module.exports = {
    extends: ['./react'],
    languageOptions: {
        globals: {
            ...globals.browser,
        },
    },
    parserOptions: {
        sourceType: 'module',
    },
};

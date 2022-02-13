module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: false,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module",
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ["@typescript-eslint"],
    ignorePatterns: ['*.d.ts', '*.js'],
    rules: {
        'no-constant-condition': ['off'],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/explicit-member-accessibility': [
            'warn',
            {
                'accessibility': 'explicit',
                'overrides': {
                    'accessors': 'explicit',
                    'constructors': 'no-public',
                    'methods': 'explicit',
                    'properties': 'off',
                    'parameterProperties': 'explicit'
                }
            }
        ],
        '@typescript-eslint/explicit-function-return-type': 'warn',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/no-shadow': 'error',
        'arrow-parens': [
            'off',
            'always'
        ],
        'dot-notation': 'error',
        'import/no-default-export': 'error',
        'import/order': 'error',
        'no-console': 'off',
        'no-empty-function': 'off',
        'no-unused-expressions': 'error',
        'no-underscore-dangle': [
            'error',
            {
                'allowAfterThis': true
            }
        ],
        'no-use-before-define': 'off',
        'quotes': [
            'error',
            'single'
        ],
    }
}
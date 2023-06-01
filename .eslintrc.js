/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	ignorePatterns: ['dist/', 'node_modules/', 'build/'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 8,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
	rules: {
		'@typescript-eslint/no-unused-vars': 'warn',
		'max-len': ['error', { code: 120, ignoreUrls: true, tabWidth: 2 }],
		'newline-before-return': 'error',
		'no-console': 'warn',
		'prefer-const': ['error', { destructuring: 'all' }],
		'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
		'react/react-in-jsx-scope': 'off',
		'sort-imports': [
			'error',
			{
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: false,
				memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
			},
		],
		'sort-keys': [
			'error',
			'asc',
			{
				allowLineSeparatedGroups: true,
			},
		],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {},
		},
		react: {
			version: 'detect',
		},
	},
}

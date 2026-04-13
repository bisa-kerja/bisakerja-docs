import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

export default [
	{
		ignores: [
			"node_modules/**",
			"build/**",
			".docusaurus/**",
			".cache-loader/**",
			"dist/**",
			"public/**",
			"*.config.js",
		],
	},
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
			prettier: prettierPlugin,
			"unused-imports": unusedImportsPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			"prettier/prettier": "error",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-require-imports": "off",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
		},
	},
];

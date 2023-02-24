const buildHelper = require("@egjs/build-helper");

export default buildHelper([
	{
		input: "./src/index.ts",
		output: "./dist/cfcs.cjs.js",
		format: "cjs",
		exports: "named",
		external: {
			"vue": "vue",
			"@cfcs/core": "@cfcs/core",
		}
	},
	{
		input: "./src/index.ts",
		output: "./dist/cfcs.esm.js",
		format: "esm",
		exports: "named",
		external: {
			"vue": "vue",
			"@cfcs/core": "@cfcs/core",
		}
	},
]);


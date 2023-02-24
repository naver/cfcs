const buildHelper = require("@egjs/build-helper");

export default buildHelper([
	{
		input: "./src/lerna.ts",
		output: "./dist/lerna.cjs.js",
		format: "cjs",
		exports: "named",
	},
	{
		input: "./src/lerna.ts",
		output: "./dist/lerna.esm.js",
		format: "esm",
		exports: "named",
	},
]);


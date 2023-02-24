
const buildHelper = require("@egjs/build-helper");
const name = "cfcs";

export default buildHelper([
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/cfcs.js",
		format: "umd",
		resolve: true,
	},
	{
		name,
		input: "./src/index.umd.ts",
		output: "./dist/cfcs.min.js",
		format: "umd",
		uglify: true,
		resolve: true,
	},
	{
		input: "./src/index.ts",
		output: "./dist/cfcs.cjs.js",
		format: "cjs",
		exports: "named",
	},
	{
		input: "./src/index.ts",
		output: "./dist/cfcs.esm.js",
		format: "esm",
		exports: "named",
	},
]);


module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [
        "<rootDir>",
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testMatch: ["<rootDir>/test/**/*.spec.ts"],
    // "testRegex": "spec\\.ts$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node",
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
};

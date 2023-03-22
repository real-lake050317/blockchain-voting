import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    moduleFileExtensions: ["ts", "js"],
    testMatch: ["**/tests/**/*.test.(ts|js)"],
    moduleNameMapper: {
        "^@core/(.*)$": "<rootDir>/core/$1",
    },
    testEnvironment: "node",
    verbose: true,
    preset: "ts-jest",
};

export default config;

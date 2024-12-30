import { createDefaultPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig = createDefaultPreset({
  diagnostics: false,
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  testEnvironment: "jsdom",
};

export default jestConfig;

module.exports = {
  displayName: "ui",
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  transform: {
    "node_modules\\/.+\\.js$": "jest-esm-transformer",
    "^(.+\\.svelte$)": [
      "svelte-jester",
      {
        preprocess: "packages/ui/svelte.config.cjs",
      },
    ],
    "^.+\\.[tj]s$": "ts-jest",
  },
  transformIgnorePatterns: [],
  moduleFileExtensions: ["svelte", "ts", "js", "html"],
  coverageDirectory: "../../coverage/packages/ui",
};

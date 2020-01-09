module.exports = {
  roots: ["<rootDir>/src"],

  moduleDirectories: ["node_modules"],

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  testRegex: "(/__tests__/.*|\\.(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  moduleNameMapper: {
    "\\.(jpe?g|png|gif|svg)": "<rootDir>/src/__mocks__/fileMock.ts",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
};

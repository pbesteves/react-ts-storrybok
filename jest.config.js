module.exports = {
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "json"
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
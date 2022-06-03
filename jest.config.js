module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__tests__/__mocks__/styleMock.js',
  }
};
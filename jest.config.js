module.exports = {
  testMatch: ['**/*.test.{js,ts}'],
  transform: {
    '^.+\\.ts$': ['@swc/jest'],
    '^.+\\.js$': ['@swc/jest'],
  },
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',

    '^__mocks__/(.*)$': '<rootDir>/__mocks__/$1',
  },
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!execa)/'],
  testTimeout: 60000,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,ts}',
    '!src/handler.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.serverless/'],
};

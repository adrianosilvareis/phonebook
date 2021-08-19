module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    '@/(.*)': ['<rootDir>/src/$1'],
  },
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  setupFiles: [],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
}

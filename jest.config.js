module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  moduleDirectories: [
    'src',
    'node_modules',
  ],
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/mocks/void.js',
    '\\.(css|scss)$': '<rootDir>/tests/mocks/void.js'
  },
};

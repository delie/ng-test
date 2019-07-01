// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config
module.exports = {
  preset: 'jest-preset-angular',
  roots: [''],
  setupFilesAfterEnv: ['<rootDir>apps/ng-test/src/jest.setup.ts'],
  moduleNameMapper: {
    '@ng-test/test-lib': 'libs/test-lib/src/public-api.ts',
    '@app/(.*)': '<rootDir>apps/ng-test/src/app/$1',
    '@assets/(.*)': '<rootDir>apps/ng-test/src/assets/$1',
    '@core/(.*)': '<rootDir>apps/ng-test/src/app/core/$1',
    '@env': '<rootDir>apps/ng-test/src/environments/environment',
    '@src/(.*)': '<rootDir>apps/ng-test/src/src/$1',
    '@state/(.*)': '<rootDir>apps/ng-test/src/app/state/$1'
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-test))']
};

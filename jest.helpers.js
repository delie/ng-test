const { pathsToModuleNameMapper } = require('ts-jest/utils');
const tsJestPreset = require('jest-preset-angular/jest-preset').globals['ts-jest'];
const { compilerOptions } = require('./tsconfig');

function getJestConfig(_jestDisplayName, _setTsConfig, _root, _path) {
  return {
    displayName: _jestDisplayName,
    rootDir: _root,
    roots: ['<rootDir>' + _path],
    transform: { '^.+\\.(ts|js|html)$': 'ts-jest' },
    testEnvironment: 'jest-environment-jsdom-thirteen',
    moduleFileExtensions: ['ts', 'html', 'js'],
    transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
    snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js'],
    setupFilesAfterEnv: ['<rootDir>./jest.setup.ts'],
    testRegex: '(\\.spec)\\.(ts)$',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/'
    }),
    globals: !_setTsConfig
      ? {}
      : {
          'ts-jest': {
            ...tsJestPreset,
            tsConfig: '<rootDir>' + _path + '/tsconfig.spec.json'
          }
        }
  };
}

module.exports = {
  getJestConfig: getJestConfig
};

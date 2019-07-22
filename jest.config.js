const jestHelpers = require('./jest.helpers');

module.exports = {
  projects: [
    jestHelpers.getJestConfig('@ng-test/webapp', true, './', 'projects/webapp'),
    jestHelpers.getJestConfig('@ng-test/common', true, './', 'projects/common')
  ]
};

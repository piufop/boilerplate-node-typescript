// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils')

module.exports = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  testRegex: '.spec.ts$',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'reports/coverage',
  coverageReporters: ['html'],
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node'
};

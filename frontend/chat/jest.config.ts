import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['/tests//.ts?(x)', '**/?(.)+(spec|test).ts?(x)'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};

export default config;
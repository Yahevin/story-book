module.exports = {
  testMatch: ['**/*.test.js'],
  transform: {
    '^.+\\.(js)$': 'babel-jest',
    "^.+\\.mdx?$": "@storybook/addon-docs/jest-transform-mdx",
    '^.+\\.stories\\.jsx?$': '@storybook/addon-storyshots/injectFileName',
  },
  verbose: true,
  transformIgnorePatterns: [
    "node_modules/(?!(@storybook/addon-contexts)/)",
    "node_modules/(?!react-syntax-highlighter|@storybook)"
  ]
};
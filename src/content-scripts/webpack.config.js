const path = require('path');

module.exports = {
  entry: './src/page.js',
  output: {
    filename: 'page.js',
    path: path.resolve(__dirname, '../../build/content-scripts'),
  },
};

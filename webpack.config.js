const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    entry: './dist/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
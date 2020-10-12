const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname) + "/../static",
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devtool: 'source-map'
};
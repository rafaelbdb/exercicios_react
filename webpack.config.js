const path = require('path');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './ex/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'public'),
        },
        // hot: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // plugins: [
    //     new MiniCssExtractPlugin({ filename: 'app.css' })
    // ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        // plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                },
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader'
            //     ]
            // }
        ]
    }
};

/**
 * Webpack: Um empacotador de módulos para JavaScript que pega módulos com dependências 
 * e gera ativos estáticos representando esses módulos. 
 * Ele pode lidar com JS, CSS, imagens, etc., 
 * e oferece recursos como divisão de código, carregamento lento e plugins para otimização.
 * 
 * Babel: Um compilador JavaScript que permite usar recursos de próxima geração e açúcar sintático
 * transpilar o código ES6+ para versões compatíveis com navegadores mais antigos. 
 * Ele também suporta JSX e TypeScript.
 */
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

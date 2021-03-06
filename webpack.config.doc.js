const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports =Object.assign({}, base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'doc'),
    },
    //入口
    entry: {
        example: './example.tsx',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html',
            filename: 'example.html'
        })
    ],   
})
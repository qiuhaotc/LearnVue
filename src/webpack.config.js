const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./WebApp/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.[contenthash:8].js'
    },
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.wasm', '.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责将css文件进行加载
                // style-loader负责将样式添加到DOM中，要放在css-loader的前面
                // webpack在使用多个loader时，是按照从右向左（或者说从下到上）的顺序使用
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 配置title属性
            title: "Vue Pages",
            // Template
            template: "./WebApp/index.html",
            // js插入的位置，true/'head'/'body'/false
            inject: 'body',
            // favicon position
            favicon: './WebApp/images/favicon.ico',
        }),
        // Vue page file load plugin
        new VueLoaderPlugin(),
        // 清空输出目录
        new CleanWebpackPlugin(),
    ]
};
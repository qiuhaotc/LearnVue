const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
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
            //配置title属性
            title: "Auto Generated",
            template: "index.html"
        }),
        new VueLoaderPlugin(),
    ]
};
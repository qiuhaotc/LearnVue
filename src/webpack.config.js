const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode : "development",
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
          },
          compress: true,
          port: 8080,
    },
};
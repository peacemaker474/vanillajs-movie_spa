const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/js/index.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        historyApiFallback: true,
        port: 8000,
        proxy: {
            '/api': {
                target: 'domain.com',
                changeOrigin: true
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        }),
        new CleanWebpackPlugin(),
    ]
}
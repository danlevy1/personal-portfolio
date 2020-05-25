const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => ({
    output: {
        filename: "[chunkhash].js",
        path: path.resolve(__dirname, "../", "build/"),
    },
    devtool: "cheap-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "projects.html",
            template: "./src/projects.html",
        }),
        new CleanWebpackPlugin(),
    ],
});

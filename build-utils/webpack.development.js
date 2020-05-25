const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => ({
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../", "dev/"),
    },
    devServer: {
        contentBase: "./src",
        stats: {
            children: false,
            maxModules: 0,
        },
        port: 3000,
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "projects.html",
            template: "./src/projects.html",
        }),
    ],
});

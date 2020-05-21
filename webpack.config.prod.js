const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/js/index.js",
    output: {
        filename: "[contenthash].bundle.js",
        path: path.resolve(__dirname, "build", "scripts"),
        publicPath: "build/scripts/",
    },
    devtool: "cheap-source-map",
    plugins: [new CleanWebpackPlugin()],
};

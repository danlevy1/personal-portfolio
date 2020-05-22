const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/js/index.js",
    output: {
        filename: "[contenthash].bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "build/",
    },
    devtool: "cheap-source-map",
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    useBuiltIns: "usage",
                                    corejs: { version: 3 },
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
};

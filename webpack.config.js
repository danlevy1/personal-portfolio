const path = require("path");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
const { DefinePlugin } = require("webpack");

// Gets the correct config file for dev or prod
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

// Gets the environment variables from the .env file
const env = dotenv.config().parsed;

// Converts the environment variables into readable JS variables
const envKeys = Object.keys(env).reduce((acc, key) => {
    acc[`process.env.${key}`] = JSON.stringify(env[key]);
    return acc;
}, {});

module.exports = ({ mode }) => {
    return webpackMerge(
        {
            mode,
            entry: "./src/js/index.js",
            module: {
                rules: [
                    {
                        test: /\.js$/,
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
                    {
                        test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
                        use: {
                            loader: "file-loader",
                            options: {
                                outputPath: (_, resourcePath, context) =>
                                    path
                                        .relative(context, resourcePath)
                                        .replace("src/", ""),
                                name: "[name].[ext]",
                            },
                        },
                    },
                    {
                        test: /\.pdf$/,
                        use: {
                            loader: "file-loader",
                            options: {
                                outputPath: (_, resourcePath, context) =>
                                    path
                                        .relative(context, resourcePath)
                                        .replace("src/", ""),
                                name: "[name].[ext]",
                            },
                        },
                    },
                ],
            },
            plugins: [
                new HtmlWebpackPlugin({
                    filename: "index.html",
                    template: "./src/index.html",
                }),
                new HtmlWebpackPlugin({
                    filename: "projects.html",
                    template: "./src/projects.html",
                }),
                new DefinePlugin(envKeys),
            ],
        },
        modeConfig(mode)
    );
};

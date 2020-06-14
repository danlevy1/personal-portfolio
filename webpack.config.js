const path = require("path");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { exec } = require("child_process");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

// Logs the dev server address
exec("ipconfig getifaddr en0", (error, stdout, stderr) => {
    console.log("------------------------------------------");
    if (error) {
        console.log("------------------------------------------");
        console.log(
            `Error executing shell command "ipconfig getifaddr en0". Error: ${error}`
        );
        console.log(`Dev server available at "localhost:3000"`);
    } else if (stderr) {
        console.log(
            `Error executing shell command "ipconfig getifaddr en0". Error: ${stderr}`
        );
        console.log(`Dev server available at "localhost:3000"`);
    } else {
        console.log(`Dev server available at ${stdout.trim()}:3000`);
    }
    console.log("------------------------------------------");
});

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
            ],
        },
        modeConfig(mode)
    );
};

const webpackMerge = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

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
                ],
            },
        },
        modeConfig(mode)
    );
};

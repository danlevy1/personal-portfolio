const path = require("path");

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
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    devtool: "inline-cheap-source-map",
});

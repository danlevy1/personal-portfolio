const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dev", "scripts"),
        publicPath: "dev/scripts/",
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
};

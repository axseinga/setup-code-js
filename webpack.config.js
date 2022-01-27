const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        filename: "bundle.js",
    },

    mode: "development",

    watch: true,

    plugins: [
        new HtmlWebpackPlugin({
            template: `./src/index.html`,
            filename: "index.html",
        }),
    ],
};

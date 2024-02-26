const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/favicons/favicon.ico", to: "favicon.ico" },
            ],
        }),
    ],
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build"),
    },
    // Common loaders here
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
};

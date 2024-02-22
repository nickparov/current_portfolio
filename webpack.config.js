const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    mode: "production",
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
            inject: true,
            template: path.resolve(__dirname, "src/index.html"), // Remove the leading slash
            filename: "index.html",
        }),
        // new BundleAnalyzerPlugin(),
    ],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
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

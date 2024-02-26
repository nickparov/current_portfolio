const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    devtool: false,
    optimization: {
        minimizer: [
            // This line adds the CSS minimizer alongside Webpack's default JS minimizer
            new CssMinimizerPlugin(),
        ],
    },
    plugins: [
        new CompressionPlugin({
            // This option specifies the compression algorithm
            algorithm: "gzip",
            // Regex to match files against
            test: /\.(js|css|html|svg)$/,
            // Only assets bigger than this size are processed. Value in bytes.
            threshold: 10240, // Example: 10 Kilobytes
            // Only assets that compress better than this ratio are processed (minRatio: 0.8 means 20% reduction or better is required).
            minRatio: 0.8,
            // Other options can be configured as needed
        }),
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: "./src/index.html",
            filename: "index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
    ],
});

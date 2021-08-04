const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contentHash].bundle.js",
		path: path.resolve(__dirname, "build"),
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: "./src/template.html",
				title: "Chetan's Portfolio",
				favicon: paths.src + "/images/ChetanId.jpg",
				filename: "index.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
			new HtmlWebpackPlugin({
				title: "Burger Builder",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/burger.html", // template file
				filename: "burger.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
			new HtmlWebpackPlugin({
				title: "Covid19 Tracker",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/covid19.html", // template file
				filename: "covid19.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
			new HtmlWebpackPlugin({
				title: "Slack Clone",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/devchat.html", // template file
				filename: "devchat.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
			new HtmlWebpackPlugin({
				title: "Ecommerce Website",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/ecommerce.html", // template file
				filename: "ecommerce.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
			new HtmlWebpackPlugin({
				title: "Survey Website",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/emaily.html", // template file
				filename: "emaily.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
			new HtmlWebpackPlugin({
				title: "News Website",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/news.html", // template file
				filename: "news.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
			}),
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, //3. Extract css into files
					"css-loader", //2. Turns css into commonjs
					"sass-loader", //1. Turns sass into css
				],
			},
		],
	},
});

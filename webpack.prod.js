const common = require("./webpack.common");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const paths = require("./paths");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contentHash].bundle.js",
		path: paths.build,
	},
	optimization: {
		minimize: true,
		runtimeChunk: {
			name: "runtime",
		},
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: "./src/index.html",
				title: "Chetan's Portfolio",
				favicon: paths.src + "/images/ChetanId.jpg",
				filename: "index.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
				cache: true,
			}),
			new HtmlWebpackPlugin({
				title: "Burger Builder",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/burger.html",
				filename: "burger.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
				cache: true,
			}),
			new HtmlWebpackPlugin({
				title: "Covid19 Tracker",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/covid19.html",
				filename: "covid19.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
				cache: true,
			}),
			new HtmlWebpackPlugin({
				title: "Slack Clone",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/devchat.html",
				filename: "devchat.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
				cache: true,
			}),
			new HtmlWebpackPlugin({
				title: "Ecommerce Website",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/ecommerce.html",
				filename: "ecommerce.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
				cache: true,
			}),
			new HtmlWebpackPlugin({
				title: "Survey Website",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/emaily.html",
				filename: "emaily.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
				cache: true,
			}),
			new HtmlWebpackPlugin({
				title: "News Website",
				favicon: paths.src + "/images/ChetanId.jpg",
				template: paths.src + "/project/news.html",
				filename: "news.html", // output file
				inject: true,
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: true,
					removeComments: true,
				},
				cache: true,
			}),
		],
	},
	plugins: [
		// new CompressionPlugin({
		// 	algorithm: "gzip",
		// 	minRatio: 0.8,
		// 	filename: "[name].[contentHash].bundle.gz",
		// 	test: /\.(js|css|html|svg|)$/,
		// 	deleteOriginalAssets: true,
		// }),

		new CopyPlugin([
			{ from: "source", to: "build" },
			{ from: "other", to: "public" },
			{ from: "src/robots.txt", to: "robots.txt" },
		]),
		new MiniCssExtractPlugin({
			filename: "styles/[name].[contentHash].css",
			chunkFilename: "[id].css",
		}),
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

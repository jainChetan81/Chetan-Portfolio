const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].[contentHash].bundle.js",
		path: paths.build,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Chetan's Portfolio",
			favicon: paths.src + "/images/ChetanId.jpg",
			template: paths.src + "/index.html",
			filename: "index.html", // output file
			inject: true,
		}),
		new HtmlWebpackPlugin({
			title: "Burger Builder",
			favicon: paths.src + "/images/ChetanId.jpg",
			template: paths.src + "/project/burger.html",
			filename: "burger.html", // output file
			inject: true,
		}),
		new HtmlWebpackPlugin({
			title: "Covid19 Tracker",
			favicon: paths.src + "/images/ChetanId.jpg",
			template: paths.src + "/project/covid19.html",
			filename: "covid19.html", // output file
			inject: true,
		}),
		new HtmlWebpackPlugin({
			title: "Slack Clone",
			favicon: paths.src + "/images/ChetanId.jpg",
			template: paths.src + "/project/devchat.html",
			filename: "devchat.html", // output file
			inject: true,
		}),
		new HtmlWebpackPlugin({
			title: "Ecommerce Website",
			favicon: paths.src + "/images/ChetanId.jpg",
			template: paths.src + "/project/ecommerce.html",
			filename: "ecommerce.html", // output file
			inject: true,
		}),
		new HtmlWebpackPlugin({
			title: "Survey Website",
			favicon: paths.src + "/images/ChetanId.jpg",
			template: paths.src + "/project/emaily.html",
			filename: "emaily.html", // output file
			inject: true,
		}),
		new HtmlWebpackPlugin({
			title: "News Website",
			favicon: paths.src + "/images/ChetanId.jpg",
			template: paths.src + "/project/news.html",
			filename: "news.html", // output file
			inject: true,
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", //3. Inject styles into DOM
					"css-loader", //2. Turns css into commonjs
					"sass-loader", //1. Turns sass into css
				],
			},
		],
	},
});

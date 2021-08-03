const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].bundle.js",
		path: paths.build,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "webpack Boilerplate",
			favicon: paths.src + "/assets/webpack.svg",
			template: paths.src + "/template.html", // template file
			filename: "index.html", // output file
			inject: true,
		}),
		new HtmlWebpackPlugin({
			title: "Burger Builder Description",
			favicon: paths.src + "/assets/webpack.svg",
			template: paths.src + "/burger.html", // template file
			filename: "burger.html", // output file
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

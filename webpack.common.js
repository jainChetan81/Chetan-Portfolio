const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: "./src/index.js",
	},
	optimization: {
		runtimeChunk: "single",
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.ttf$/,
				use: [
					{
						loader: "ttf-loader",
						options: {
							name: "./font/[hash].[ext]",
						},
					},
				],
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[hash].[ext]",
							outputPath: "imgs",
						},
					},
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true,
							},
							gifsicle: {
								interlaced: false,
							},
							optipng: {
								optimizationLevel: 7,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
						},
					},
				],
			},
			{
				test: /\.pdf$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "pdf",
						},
					},
				],
			},
		],
	},
};

const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		main: "./src/index.js",
	},
	optimization: {
		runtimeChunk: "single",
	},
	plugins: [
		new WorkboxWebpackPlugin.InjectManifest({
			swSrc: "./src/service-worker.js",
			swDest: "service-worker.js",
			include: [/\.html$/, /\.js$/, /\.css$/],
			// include: [/\.html$/, /\.js$/, /\.css$/, /\.woff2$/, /\.jpg$/, /\.png$/],
		}),
		new CopyWebpackPlugin([{ from: "src/images", to: "imgs/" }, "src/manifest.webmanifest"], {
			ignore: [".DS_Store"],
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				enforce: "pre",
				use: ["source-map-loader"],
				exclude: "/node_modules/",
			},
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

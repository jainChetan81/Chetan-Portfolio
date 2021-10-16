// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
	entry: {
		main: "./src/index.js",
	},
	optimization: {
		runtimeChunk: "single",
	},
	plugins: [
		new WorkboxPlugin.GenerateSW({
			// Do not precache images
			exclude: [/\.(?:png|jpg|jpeg|svg)$/],

			// Define runtime caching rules.
			runtimeCaching: [
				{
					// Match any request that ends with .png, .jpg, .jpeg or .svg.
					urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

					// Apply a cache-first strategy.
					handler: "CacheFirst",

					options: {
						// Use a custom cache name.
						cacheName: "images",

						// Only cache 10 images.
						expiration: {
							maxEntries: 10,
						},
					},
				},
			],
		}),
		// new WorkboxWebpackPlugin.InjectManifest({
		// 	swSrc: "./src/service-worker.js",
		// 	swDest: "service-worker.js",
		// 	include: [/\.html$/, /\.js$/, /\.css$/],
		// 	// include: [/\.html$/, /\.js$/, /\.css$/, /\.woff2$/, /\.jpg$/, /\.png$/],
		// }),
		new CopyWebpackPlugin([{ from: "src/images", to: "images/" }, "src/manifest.json"], {
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
							// name: "[name].[ext]",
							outputPath: "images",
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

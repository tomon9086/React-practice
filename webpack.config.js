// const path = require("path");

module.exports = {
	entry: {
		app: [
			"./client/index.js"
		]
	},
	output: {
		filename: "./public/index.js"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["react"]
					}
				}
			},
			{
				test: /\.css$/,
				loaders: [
					"style?sourceMap",
					"css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]"
				]
			}
		]
	},
	resolveLoader: {
		moduleExtensions: ["-loader"]
	}
	// devtool: "source-map",
	// devServer: {
	// 	contentBase: path.resolve(__dirname, "public")
	// }
}

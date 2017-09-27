const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: [
			'babel-loader'
		]
	},
	{
		test: /\.css$/,
		exclude: /node_modules/,
		use: ExtractTextPlugin.extract({
			fallback: "style-loader",
			use: [
				{
					loader: "css-loader",
					options: {
						modules: true,
						importLoaders: 1,
						localIdentName: "[local]"
					}
				},
				{
					loader: "postcss-loader",
					options: {
						sourcemap: false
					}
				},
			]
		})
	},
	{
		test: /\.json$/,
		exclude: /node_modules/,
		use: 'json-loader'
	}
]

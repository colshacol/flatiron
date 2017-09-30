const { resolve } = require('path')
const loaders = require('./loaders')
const plugins = require('./plugins')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	cache: false,
	devtool: 'cheap-module-source-map',
	context: resolve(__dirname, '../source'),
	entry: [
		// 'babel-polyfill',
		'./index.js'
	],

  output: {
    filename: 'js/index.js',
    path: resolve(__dirname, '../build')
	},

  module: {
    rules: [ ...loaders ]
	},

	resolve: {
    modules: [resolve(__dirname, '../node_modules')],
    extensions: ['.js', '.json', '.jsx', '.css'],
    alias: {
      '@comps': resolve(__dirname, '../source/comps'),
			'@styles': resolve(__dirname, '../source/styles'),
			'@utilities': resolve(__dirname, '../source/utilities'),
			'@packages': resolve(__dirname, '../source/packages'),
			'@scenes': resolve(__dirname, '../source/scenes'),
    }
	},

	plugins: [
		...plugins,
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin([
			'*.hot-update.js',
			'*.hot-update.js.map',
			'*.hot-update.json',
			'css/',
			'js/'
		], {
			verbose: true,
			root: resolve(__dirname, '../build')
		}),
		new CopyWebpackPlugin([
      {
        from: '../node_modules/monaco-editor/min/vs',
        to: 'vs',
      }
    ])
	],

	// devServer: {
  //   hot: false,
  //   overlay: true,
	// 	lazy: false,
	// 	contentBase: resolve(__dirname, '../build'),
	// 	clientLogLevel: "warning"
  // }
}

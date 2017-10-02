const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
	new ExtractTextPlugin({ filename: 'css/styles.css' })
]

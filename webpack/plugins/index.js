const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
	new ExtractTextPlugin({ filename: 'styles.css' })
]

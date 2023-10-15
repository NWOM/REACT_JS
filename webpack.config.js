module.exports = {
	entry: './script.js',
	output: {
		path: './',
		filename: 'transpiled.js',
	},
	module: {
		loaders: [
			   { 
			   	test: /\.js$/,
			   	loader: 'babel-loader', 
			   	exclude: /node_modules/, 
			   	query: {
			   		presets: ['es2015','react']

			   } 
			}

		]
	}
}
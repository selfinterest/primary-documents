var path = require("path");
var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var clientPath = path.join(__dirname, "src", "client");
var clientDistPath = path.join(__dirname, "dist", "client");

module.exports = {
	cache: true,
	entry: {
		app: [path.join(clientPath, "app.js")]
	},
	output: {
		filename: "[name].js",
		chunkFilename: "[chunkhash].js",
		path: clientDistPath,
		publicPath: "dist/"
	},
	plugins: [
		new OpenBrowserPlugin({url: 'http://localhost:8080'}),
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		})
	],
	module: {
		preLoaders: [
			{
				test: "/\.js$",
				loader: 'baggage?[file].tpl.jade&[file].less'
			}
		],
		loaders: [
			
			// LESS files
			{test: /\.less$/, loader: "style!css!less"},

			// plain 'ol CSS files
			{test: /\.css$/, loader: "style!css"},

			// Angular templates (as Jade! Pretty cool!)	
			{test: /\.tpl\.jade$/, loader: "ngtemplate?relativeTo=src/client!html!jade-html"},

			//{ test: /\.jade$/,	loader: "html!jade-html" },
			
			// required for bootstrap icons
			{test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff"},
			{test: /\.woff2$/, loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff"},
			{test: /\.ttf$/, loader: "file-loader?prefix=font/"},
			{test: /\.eot$/, loader: "file-loader?prefix=font/"},
			{test: /\.svg$/, loader: "file-loader?prefix=font/"},
		]
	}
}
	

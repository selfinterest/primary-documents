var path = require("path");
var webpack = require("webpack");

var clientPath = path.join(__dirname, "src", "client")
var clientDistPath = path.join(__dirname, "dist", "client");

module.exports = {
	cache: true,
	entry: {
		main: path.join(clientPath, "main.js")
	},
	output: {
		filename: "[name].js",
		chunkFilename: "[chunkhash].js",
		path: clientDistPath,
		publicPath: "dist/"	
	},
	module: {
		preLoaders: [
			{
				test: "/\.js$",
				loader: 'baggage?[file].jade&[file].less'
			}
		],
		loaders: [
			
			// LESS files
			{ test: /\.less$/,  loader: "style!css!less" },

			// Angular templates (as Jade! Pretty cool!)	
			{ test: /\.tpl\.jade$/, loader: "ngtemplate!html!jade-html"},
		 	
		 	//{ test: /\.jade$/,	loader: "html!jade-html" },
			
			// required for bootstrap icons
			{ test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
		    { test: /\.woff2$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
			{ test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.eot$/,    loader: "file-loader?prefix=font/" },
			{ test: /\.svg$/,    loader: "file-loader?prefix=font/" },
		]
	}
}
	

var webpack = require( "webpack" );

module.exports = {
	"entry": "./truly.support.js",
	"resolve": {
		"modulesDirectories": [ "bower_components", "node_modules" ]
	},
	"output": {
		"library": "truly",
		"libraryTarget": "umd",
		"filename": "truly.deploy.js"
	},
	"plugins": [
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( "bower.json", [ "support" ] ) ),
		new webpack.ResolverPlugin( new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( ".bower.json", [ "main" ] ) ),
		new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } )
	]
};

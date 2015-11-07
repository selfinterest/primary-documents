var gulp = require("gulp")
  , gutil = require("gulp-util")
  , webpack = require("webpack")
  , WebpackDevServer = require("webpack-dev-server")
  , del = require("del")
  , path = require("path")
  , webpackConfig = require("./webpack.config.js")
;

// Dev server task is the default for development
gulp.task("default", ["webpack-dev-server"]);


// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function() {
	gulp.watch(["src/**/*"], ["webpack:build-dev"]);
});

//Clean dist directory
gulp.task("clean", function(){
  return del(["dist"])
});


// Production build
gulp.task("build", ["copy", "webpack:build"]);

//Copy server files to dist directory (these don't need to be compiled in any way.)
gulp.task("copy", ["clean"], function(){
  gulp.src(["package.json", "src/server/**/*.js", "src/client/index.html"], {base: "src"})
    .pipe(gulp.dest("dist/"))
});

gulp.task("webpack:build", ["copy"], function(callback){
  var myConfig = Object.create(webpackConfig);

  myConfig.plugins = myConfig.plugins.concat(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  );

  myConfig.output.publicPath = "/";

  webpack(myConfig, function(err, stats){
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true
    }));
    callback();
  })
});


// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});


gulp.task("webpack-dev-server", function(callback) {
	//as per: https://github.com/webpack/webpack-with-common-libs/blob/master/gulpfile.js

	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;
    //The next line makes hot reloading work
    myConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8080");
	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
      //this is where the server will make available its in-memory webpack bundle; see the index.html file.
      //If we made it /assets, then /assets/main.js would contain the bundle.
        publicPath: "",
        historyApiFallback: true,
        ///inline: true,
        progress: true,
		//publicPath: "/" + myConfig.output.publicPath,
        contentBase: "src/client",
		stats: {
			colors: true
		}
	}).listen(8080, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
	});
});



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
  gulp.src(["package.json", "src/server/**/*.js"], {base: "."})
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

/*global window */
/*jslint node: true */
"use strict";

require("bootstrap-less/bootstrap/bootstrap.less");
require("../../bower_components/yamm3/yamm/yamm.less");

//We have to assign jQuery to the window so that Angular will detect and use it.
window.jQuery = window.$ = require("jquery");

/** @global */
var angular = require("angular");
require("angular-animate");
require("angular-ui-router");
require("angular-bootstrap-npm");
require("../assets/js/angular-mega-menu.js");

//require("../../bower_components/angular-menu-aim/build/flyout-tpls.min.js");
//require("../../bower_components/angular-menu-aim/src/flyout.css");

//Declare the main Angular module for the app
var app = angular.module("PrimaryDocuments", ["ui.bootstrap", "ui.router", "mega-menu", "ngAnimate"]);

app.run(["$rootScope", function ($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
}]);

require("./bottom/bottom.js");
require("./top/top.js");
require("./home/home.js");
require("./about/about.js");

require("./main/main.js");






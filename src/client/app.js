/*global window */
/*jslint node: true */
"use strict";

require("bootstrap-less/bootstrap/bootstrap.less");
require("../../bower_components/yamm3/yamm/yamm.less");
require("../assets/css/animate.css");

//We have to assign jQuery to the window so that Angular will detect and use it.
window.jQuery = window.$ = require("jquery");

/** @global */
var angular = require("angular");
require("angular-animate");
require("angular-ui-router");
require("angular-bootstrap-npm");
require("ng-fx");
require("../assets/js/angular-mega-menu.js");


//Declare the main Angular module for the app
var app = angular.module("PrimaryDocuments", ["ui.bootstrap", "ui.router", "mega-menu", "ngAnimate", "ng-fx"]);

app.run(["$rootScope", "$state", function ($rootScope, $state) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
    $rootScope.$state = $state;     //global reference to the state service
}]);


["bottom", "top", "home", "about", "search", "main"].forEach(function (part) {
    require("./" + part + "/" + part + ".js");
});





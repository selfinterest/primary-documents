/*jslint node: true */
"use strict";

require("bootstrap-less/bootstrap/bootstrap.less");

/** @global */
var angular = require("angular");

require("angular-ui-router");
require("angular-bootstrap-npm");


//Declare the main Angular module for the app
var app = angular.module("PrimaryDocuments", ["ui.bootstrap", "ui.router"]);

app.run(["$rootScope", function ($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
}]);

require("./bottom/bottom.js");
require("./top/top.js");

require("./main/main.js");






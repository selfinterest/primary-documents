require("bootstrap-less/bootstrap/bootstrap.less");
var angular = require("angular");
require("angular-ui-router");
require("angular-bootstrap-npm");


//Declare the main Angular module for the app
var app = angular.module("PrimaryDocuments", ["ui.bootstrap", "ui.router"]);

require("./main/main.js");
require("./top/top.js");
require("./bottom/bottom.js");

/*var templateUrl = require('./main/main.tpl.jade');
console.log(templateUrl);*/






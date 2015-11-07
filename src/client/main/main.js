/**
 * Created by terrence on 11/6/15.
 */

/*jslint node: true */
/*global angular */

"use strict";

require("./main.less");
var templateUrl = require("./main.tpl.jade");

angular.module("PrimaryDocuments")
    .config(["$urlRouterProvider", "$stateProvider", "$locationProvider", function ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("main", {
                url: "/",
                templateUrl: templateUrl,
                abstract: true
            })
    }])
;
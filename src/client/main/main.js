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
        $stateProvider
            .state("main", {
                url: "/",
                templateUrl: templateUrl,
                abstract: true
                //abstract: true
            })
           /* .state("main.top", {
                url: "",
                views: {
                    "top": {
                        template: "<div>Test</div>"
                    }
                }
            })
            .state("main.bottom", {
                url: "",
                views: {
                    "bottom": {
                        templateUrl: bottomTemplateUrl
                    }
                }


            })
            */
    }])
;
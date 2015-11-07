/**
 * Created by terrence on 11/6/15.
 */

/*jslint node: true */
/*global angular */
"use strict";

var templateUrl = require("./main.tpl.jade");

angular.module("PrimaryDocuments")
    .config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state("main", {
                url: "",
                templateUrl: templateUrl
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
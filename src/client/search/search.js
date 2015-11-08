/*global angular */
/*jslint node: true */
"use strict";

(function(angular){
    var templateUrl = require("./search.tpl.jade");
    angular.module("PrimaryDocuments")
        .config(["$stateProvider", function($stateProvider){
            $stateProvider
                .state("main.search", {
                    url: "search?field",
                    templateUrl: templateUrl
                });
        }]);

})(angular);


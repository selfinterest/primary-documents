/**
 * Created by terrence on 11/7/15.
 */


/*jslint node: true */
/*global angular */

"use strict";

(function(angular){
    var templateUrl = require("./about.tpl.jade");
    angular.module("PrimaryDocuments")
        .config(["$stateProvider", function($stateProvider){
            $stateProvider
                .state("main.about", {
                    url: "about",
                    templateUrl: templateUrl
                });
        }])

})(angular);
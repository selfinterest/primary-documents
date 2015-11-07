/**
 * Created by terrence on 11/7/15.
 */

/*global angular */
/*jslint node: true */
"use strict";

(function(angular){
    var templateUrl = require("./home.tpl.jade");
    angular.module("PrimaryDocuments")
        .config(["$stateProvider", function($stateProvider){
            $stateProvider
                .state("main.home", {
                    url: "",
                    templateUrl: templateUrl
                });
        }])

})(angular);



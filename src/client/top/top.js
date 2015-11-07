/**
 * Created by terrence on 11/6/15.
 */

/*jslint node: true */
"use strict";
(function (angular) {
    var templateUrl = require("./top.tpl.jade");

    angular.module("PrimaryDocuments")
        .controller("TopController", [function(){
            this.templateUrl = templateUrl;
        }])
    ;
})(angular);

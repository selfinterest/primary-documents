/**
 * Created by terrence on 11/7/15.
 */

/*jslint node: true */
/*global angular */
"use strict";

(function (angular) {
    var templateUrl = require("./bottom.tpl.jade");

    angular.module("PrimaryDocuments")
        .controller("BottomController", [function(){
            this.templateUrl = templateUrl;
        }]);
})(angular);

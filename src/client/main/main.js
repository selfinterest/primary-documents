/**
 * Created by terrence on 11/6/15.
 */

var templateUrl = require("./main.tpl.jade");
angular.module("PrimaryDocuments")
    .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
        $stateProvider
            .state("main", {
                abstract: true,
                url: "",
                templateUrl: templateUrl
            })
    }])
;
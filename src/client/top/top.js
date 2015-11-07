/**
 * Created by terrence on 11/6/15.
 */
var templateUrl = require("./top.tpl.jade");
angular.module("PrimaryDocuments")
    .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
        $stateProvider
            .state("main.top", {
                url: "",
                views: {
                    "top@main": {
                        templateUrl: templateUrl
                    }
                }


            })
    }])
;
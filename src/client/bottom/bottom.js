/**
 * Created by terrence on 11/7/15.
 */
var templateUrl = require("./bottom.tpl.jade");
angular.module("PrimaryDocuments")
    .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
        $stateProvider
            .state("main.bottom", {
                url: "",
                views: {
                    "bottom@main": {
                        templateUrl: templateUrl
                    }
                }


            })
    }])
;
/**
 * Created by terrence on 11/6/15.
 */
/*global angular */
/*jslint node: true */
"use strict";

require("./top.less");

(function (angular) {
    var templateUrl = require("./top.tpl.jade");

    angular.module("PrimaryDocuments")
        .controller("TopController", ["navigationMenu", "$scope", function (navigationMenu, $scope) {
            this.templateUrl = templateUrl;
            this.navigationMenu = navigationMenu;
            $scope = this;
        }])
        .factory("navigationMenu", ["$log", function ($log) {
            return {
                searchActive: false,
                toggleSearch: function () {
                    if (this.searchActive) {
                        this.deactivateSearch();
                    } else {
                        this.activateSearch();
                    }
                    $log.info("Search menu is " + this.searchActive ? "on" : "off");
                },
                deactivateSearch: function () {
                    this.searchActive = false;
                    this.searchSubmenu = false;
                },
                activateSearch: function () {
                    this.searchActive = true;
                },
                switchLanguage: function (e) {
                    e.stopPropagation();
                    $log.info("Switching language");
                },
                selectSubmenu: function(e, menu){
                    e.stopPropagation();
                    this.searchSubmenu = menu;
                }
            };
            /*return {
                items: [
                    {
                        text: "Search by dates",
                        state: "searchByDates"
                    },
                    {
                        text:
                    }
                ]
            };*/
        }]);
}) (angular);

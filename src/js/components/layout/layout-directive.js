'use strict';

module.exports = function (ngModule) {
    ngModule.controller('layoutController', function () {
        var self = this;

        console.log('test');
    });

    ngModule.directive('homePage', function () {
        return {
            restrict: 'E',
            controller: 'layoutController',
            controllerAs: 'layoutCtrl',
            template: '<h2>Directive Test</h2>'
        };
    });
};

'use strict';

module.exports = function (ngModule) {
    ngModule.controller('layout2Controller', function () {
        var self = this;

        console.log('test2');
    });

    ngModule.directive('homePageTest', function () {
        return {
            restrict: 'E',
            controller: 'layout2Controller',
            controllerAs: 'layoutCtrl',
            template: '<h2>Directive Test</h2>'
        };
    });
};

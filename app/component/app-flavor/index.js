'use strict';

require('./app-flavor.scss');

const angular = require('angular');

angular.module('brewBuddy').directive('appFlavor', function() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-flavor.html'),
    controller: [AppFlavorController],
    controllerAs: 'flavorCtrl',
    bindToController: true,
    scope: {},
  };

  function AppFlavorController(flavorService){
    this.flavorService = flavorService;

  }
});

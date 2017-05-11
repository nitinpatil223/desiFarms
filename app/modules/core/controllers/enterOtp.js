'use strict';

/**
 * @ngdoc object
 * @name core.Controllers.HomeController
 * @description Home controller
 * @requires ng.$scope
 */
angular
    .module('core')
    .controller('EnterotpController', ['$scope','$rootScope',
        function($scope,$rootScope) {
            
           $rootScope.menuShow =true; 
           $rootScope.addToCartShow =true; 

        }
    ]);

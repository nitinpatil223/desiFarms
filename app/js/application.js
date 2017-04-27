'use strict';

angular
    .module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular
    .module(ApplicationConfiguration.applicationModuleName)
    .config(['$locationProvider', 'snapRemoteProvider',
           function($locationProvider, snapRemoteProvider) {
               snapRemoteProvider.globalOptions.disable = 'right';
               $locationProvider.hashPrefix('!');
           }
       ]).run(function ($rootScope, $window ) {


                //*****************************************/ 
                // Function : showLoader
                // Parameter : flag
                // Desc : Handle the Show / Hide of Loader

                $rootScope.showLoader = function ($flag) {
                    $rootScope.loaderShow = $flag;
                };
       
           
       });

//Then define the init function for starting up the application
angular
    .element(document)
    .ready(function() {
        if (window.location.hash === '#_=_') {
            window.location.hash = '#!';
        }
        angular
            .bootstrap(document,
                [ApplicationConfiguration.applicationModuleName]);
    });

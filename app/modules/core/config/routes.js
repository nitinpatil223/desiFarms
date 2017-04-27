'use strict';

/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular
        .module('core')
        .config(['$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');

                /**
                 * @ngdoc event
                 * @name core.config.route
                 * @eventOf core.config
                 * @description
                 *
                 * Define routes and the associated paths
                 *
                 * - When the path is `'/'`, route to home
                 * */
                $stateProvider
                        .state('home', {
                            url: '/',
                            templateUrl: 'modules/core/views/home.html',
                            controller: 'HomeController'
                        })
						.state('otp', {
                            url: '/otp',
                            templateUrl: 'modules/core/views/otp.html',
                            controller: 'OtpController'
                        })
						.state('enterOtp', {
                            url: '/enterOtp',
                            templateUrl: 'modules/core/views/enterOtp.html',
                            controller: 'EnterotpController'
                        })
						.state('referralCode', {
                            url: '/referralCode',
                            templateUrl: 'modules/core/views/referralCode.html',
                            controller: 'ReferralcodeController'
                        })
                        .state('logout', {
                            url: '/logout',
                            templateUrl: 'modules/core/views/home.html',
                            controller: 'HomeController'
                        })
                        

                        

            }
        ]);

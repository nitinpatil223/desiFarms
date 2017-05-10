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
						.state('userinfo', {
                            url: '/userinfo',
                            templateUrl: 'modules/core/views/userinfo.html',
                            controller: 'UserinfoController'
                        })
			.state('products', {
                            url: '/products',
                            templateUrl: 'modules/core/views/products.html',
                            controller: 'ProductsController'
                        })
                        .state('productsdetails', {
                            url: '/productsdetails',
                            templateUrl: 'modules/core/views/productsdetails.html',
                            controller: 'ProductsdetailsController'
                        })

			.state('calenderView', {
                            url: '/calenderView',
                            templateUrl: 'modules/core/views/calenderView.html',
                            controller: 'CalenderviewController'
                        })
                        .state('addcart', {
                            url: '/addcart',
                            templateUrl: 'modules/core/views/addcart.html',
                            controller: 'AddcartController'
                        })
                         .state('myorders', {
                            url: '/myorders',
                            templateUrl: 'modules/core/views/myorders.html',
                            controller: 'MyordersController'
                        })
                         .state('billings', {
                            url: '/billings',
                            templateUrl: 'modules/core/views/billings.html',
                            controller: 'BillingsController'
                        })
			.state('termsofuse', {
                            url: '/termsofuse',
                            templateUrl: 'modules/core/views/termsofuse.html',
                            controller: 'TermsofuseController'
                        })
                        .state('howitworks', {
                            url: '/howitworks',
                            templateUrl: 'modules/core/views/howitworks.html',
                            controller: 'HowitworksController'
                        })
                        .state('customercare', {
                            url: '/customercare',
                            templateUrl: 'modules/core/views/customercare.html',
                            controller: 'CustomercareController'
                        })
                        .state('subscription', {
                            url: '/subscription',
                            templateUrl: 'modules/core/views/subscription.html',
                            controller: 'SubscriptionController'
                        })
                        .state('logout', {
                            url: '/logout',
                            templateUrl: 'modules/core/views/home.html',
                            controller: 'HomeController'
                        })
                        .state('payment_history', {
                           url: '/payment_history',
                           templateUrl: 'modules/core/views/payment_history.html',
                           controller: 'BillingsController'
                       })
                       .state('holdsubscription', {
                           url: '/holdsubscription',
                           templateUrl: 'modules/core/views/holdsubscription.html',
                           controller: 'HoldsubscriptionController'
                       })
					   .state('login', {
                           url: '/login',
                           templateUrl: 'modules/core/views/login.html',
                           controller: 'LoginController'
                       })
					   .state('registration', {
                           url: '/registration',
                           templateUrl: 'modules/core/views/registration.html',
                           controller: 'RegistrationController'
                       })
                       
                       
                       


            }
        ]);

'use strict';

angular.module('core').factory('restAPIService', restAPIService);

function restAPIService($http, $rootScope,$window,Constant) {
	
    $rootScope.apiUrl = Constant.urlBase;
	
	 var config = {
		headers: {
         //'authenticationtoken': $window.sessionStorage.token
	 	}
	 }
	return {
		registerCustomer:registerCustomer,
		customerLogin : customerLogin,
		logOutCustomer:logOutCustomer,
		getUserProfile: getUserProfile,
		updateProfile:updateProfile
	}
	 
	function getUserProfile(userid) {
		return $http.post($rootScope.apiUrl + 'getUserProfile',userid,config);
	}
	function updateProfile(userObj) {
		return $http.post($rootScope.apiUrl + 'updateProfile', userObj,config);
	}
	function logOutCustomer(userObj) {
		return $http.post($rootScope.apiUrl + 'logOutCustomer', userObj,config);
	}
	function customerLogin(userObj) {
		return $http.post($rootScope.apiUrl + 'customerLogin', userObj);
	}
	function registerCustomer(userObj) {
		return $http.post( $rootScope.apiUrl + 'registerCustomer', userObj);
	}
}
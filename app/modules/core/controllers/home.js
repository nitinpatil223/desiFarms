/**
 * @ngdoc object
 * @name core.Controllers.HomeController
 * @description Home controller
 * @requires '$scope','$rootScope','$state','restAPIService'
 */
angular.module('core').controller('HomeController', ['$scope','$cookies','$rootScope','$state','restAPIService','$window','Constant',
    function($scope,$cookies,$rootScope,$state,restAPIService,$window,Constant) {
		
		var user= $cookies.get('user');
                $rootScope.menuShow =false; 
                $rootScope.addToCartShow =false; 
                
		$scope.userObj ={};
		
		if (user == "" || user == undefined) {
			$state.go('home');
		}else{
			$rootScope.user = JSON.parse(user);
			$window.sessionStorage.token = $rootScope.user.result.token;
		}
		
		if($state.current.name === 'logout'){
			logout();
		}
		
		function logout(){
			var userDetails={};
	    	userDetails.user_id =$rootScope.user.result.user_id;
	    	userDetails.token = $rootScope.user.result.token;
			var authUserObj = restAPIService.logOutCustomer(userDetails);
    		authUserObj.success(function(response) {
    			if(response.status === "success"){
	       			 console.log(response);
	       			 $state.go('home');
    			}else{
    				console.log(response);
    			}
    			 
    		}).error(function(response){
    			console.log(response);
    		});
		}
            
         /* 
         * 
         * @returns {undefined}
         */
            
          $scope.login = function(isValid) {
        	  $scope.submitted = true; 
            	if(isValid){
            		var authUserObj = restAPIService.customerLogin($scope.userObj);
                	$scope.showLoader(true);		
                	authUserObj.success(function(response)  {
	                    if(response.status === "success") {
                            $rootScope.user = response;
                            $window.sessionStorage.token = $rootScope.user.result.token;
                            $cookies.put('user', JSON.stringify($rootScope.user));
                            $scope.showLoader(false);		
                            // console.log(JSON.parse($cookies.get('user')));
                            $state.go('navigation');
	                    }
	                    else{
	                        $scope.showLoader(false);	
	                        alert(response.message);
	                        console.log(response);
	                    }
		    		}).error(function(response){
		    			 $scope.showLoader(false);	
		                 alert(response.message);
		    		});
            	}
            	
        };

    }
])

angular.module('core').controller('ForgotPasswordController', ['$scope','$cookies','$rootScope','$state','restAPIService','$window','Constant',
    function($scope,$cookies,$rootScope,$state,restAPIService,$window,Constant) {
		
		var user= $cookies.get('user');
		$scope.userObj ={};
		
		if (user == "" || user == undefined) {
			$state.go('home');
		}else{
			$rootScope.user = JSON.parse(user);
			$window.sessionStorage.token = $rootScope.user.result.token;
		}
		
		if($state.current.name === 'logout'){
			logout();
		}
		
		
            
         /* 
         * 
         * @returns {undefined}
         */
            
          
    }
]);

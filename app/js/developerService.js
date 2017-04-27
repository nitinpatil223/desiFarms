'use strict';

/* services.js */

angular
        .module(ApplicationConfiguration.applicationModuleName).service('sendParamService', function($window) {

    var params = [];
    params.length = 0;
    var setId = function(id) {       
        $window.sessionStorage.setItem("param_id", angular.toJson(id));
    };

    var getId = function() {
        return angular.fromJson($window.sessionStorage.getItem("param_id"));         
    };

    return {
        setId: setId,
        getId: getId
    };

})
.factory('alertService', function($rootScope, $timeout) {
    var alertService = {};

    // create an array of alerts available globally
    $rootScope.alerts = [];
    $rootScope.ShowAlert = false;
    alertService.add = function(type, msg, timeout) {
        
    $rootScope.alert_msg_class ="show";
        $rootScope.ShowAlert = true;
        $rootScope.alerts.push({
            type: type,
            msg: msg,
            close: function() {
               // return alertService.closeAlert(this);
            }
        });

        if (timeout) {            
            $timeout(function() {

                alertService.closeAlert(this);
            }, timeout);
        }
    };

    alertService.closeAlert = function(index) {

        $rootScope.alerts.splice(index, 1);
    };

    return alertService;
})
.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}])
.directive('datetimepicker', function(){

    return {

        require: '?ngModel',

        restrict: 'A',

        link: function(scope, element, attrs, ngModel){


            if(!ngModel) return; // do nothing if no ng-model

            
            ngModel.$render = function(){

                element.find('input').val( ngModel.$viewValue || '' );

            }


            element.datetimepicker({ 

               // language: 'it'                 
                //defaultDate: scope.default_date
            });


            element.on('dp.change', function(){

                scope.$apply(read);

            });


           // read();


            function read() {
               // console.log(element.find('input'));
                var value = element.find('input').val();               
                ngModel.$setViewValue(value);

            }

        }

    }

})
//for First letter of word capital
.filter('capitalize', function(){
           return function(input){
                if(input){                  
                    return input[0].toUpperCase() + input.slice(1);
                }
           };
        })


//For Calculate Sum of Selected Invoices
.filter('sumOfValue', function(){
    return function(data,key){

        if (angular.isUndefined(data) && angular.isUndefined(key))
             return 0;        
         var sum = 0;        

         angular.forEach(data,function(value){
             sum = sum + parseFloat(value[key]);
         });        
         return sum ;

    };
 })

//Factory Service fot Expiry Year DropDown

.factory('cardExpYear', function() {
        var year = new Date().getFullYear();
        var year_arr = [];
        year_arr.push(year);
        for(var i=1;i<20;i++) {
          year_arr.push(year + i);
        }
         return year_arr ;
})

//Factory Service fot Expiry Year DropDown
.factory('cardExpMonth', function() {
       
        var month_arr = [];
        var month_val ="";
        
        for(var i=1;i<= 12;i++) {
          
          if(i < 10)
          {
            month_val = "0"+i;  
          }
          else
          {
            month_val = i;                
          }
          
          month_arr.push(month_val);
        }
         return month_arr ;
})
.filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }

        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var country, city, number;

        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }

        if (country == 1) {
            country = "";
        }

        number = number.slice(0, 3) + '-' + number.slice(3);

        return (country + " (" + city + ") " + number).trim();
    };
})  
//for change date format to db fomat
.filter('changeDateDbFormat', function() {
    return function(input) {

        if (input) {
            var from = input.split("/");           
            var f = from[2] + "-" + from[0] + "-" + from[1];
            return f;
        }
    };
})

//for change date format to db fomat
.filter('expirydate', function() {
   
    return function() {

      var filter = 
        function(arr, lower, upper) {
            alert(lower);
            alert(upper);
          for (var i = lower; i <= upper; i++) arr.push(i)
          return arr
        }
        //console.log(filter);
        return false;
      
    };
})
.directive('bDatepicker', function(){
        return {
          require: '?ngModel',  
          restrict: 'A',
          link: function(scope, element, attrs, ngModel) {
            if(!ngModel) return; // do nothing if no ng-model  
            
              element.datetimepicker({ format: 'MM/DD/YYYY'});
            
              element.on('dp.change', function(){
                    scope.$apply(read);
            });

            function read() {
               // console.log(element.find('input'));
                var value = element.val();               
                ngModel.$setViewValue(value);
            }
          }
        };
    })
.directive('myModal', function() {
   return {
     restrict: 'A',
     link: function(scope, element, attr) {
       scope.dismiss = function() {
           element.modal('hide');
       };
     }
   } 
})
.directive
  ( 'creditCardType'
  , function(){
      var directive =
        { require: 'ngModel'
        , link: function(scope, elm, attrs, ctrl){
            ctrl.$parsers.unshift(function(value){
              scope.billing_details.card_type =
                (/^5[1-5]/.test(value)) ? "Master Card"
                : (/^4/.test(value)) ? "Visa"
                : (/^3[47]/.test(value)) ? 'amex'
                : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? 'discover'
                : undefined
              ctrl.$setValidity('invalid',!!scope.billing_details.card_type)
              return value
            })
          }
        }
      return directive
      }
    )
.directive('validFile',function(){
  return {
    require:'ngModel',
    link:function(scope,el,attrs,ngModel){
      //change event is fired when file is selected
      el.bind('change',function(){
        scope.$apply(function(){
          ngModel.$setViewValue(el.val());
          ngModel.$render();
        });
      });
    }
  }
})
.directive("ngConfirmField", function () {
    return{require: "ngModel", scope: {confirmAgainst: "="}, link: function (a, b, c, d) {
            var e = function () {
                var a = d.$viewValue, b = f();
                return d.$setValidity("noMatch", b), b ? a : void 0
            }, f = function () {
                return d.$viewValue === a.confirmAgainst
            };
            d.$parsers.push(e), a.$watch("confirmAgainst", e)
        }}
})
//for First letter of word capital
.filter('convertDate', function(){
           return function(usDate){
                var dateParts = usDate.split(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                return dateParts[3] + "-" + dateParts[1] + "-" + dateParts[2];
           };
        })
.constant('Constant', {
    

    urlBase : "http://newwavestech.com/carrots_hub/api/mobile_api.php?function=",
    //urlBase : "http://localhost/pinkpocket/api/mobile_api.php?function=",


    CITY: [   
                                   {name: 'Newsletter', value: 'Newsletter'}, 
                                   {name: 'Presentation / webinar', value: 'Presentation'},
                                   {name: 'Print Ad', value: 'Print Ad'},
                                   {name: 'Referral', value: 'Referral'},
                                   {name: 'Trade show', value: 'Trade show'}, 
                                   {name: 'Web ad', value: 'Web ad'},
                                   {name: 'Web search', value: 'Web search'},
                                  ],                                    
                                  
			});

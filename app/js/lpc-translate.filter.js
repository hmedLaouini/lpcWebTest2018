'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService
        ,$rootScope){

        var filter = function(key,locale){ 
            //If data not loaded fill with placeholder empty string   
            if(!$rootScope.properties) return " " ;
            else return $rootScope.properties[locale][key];
        }
       
        //Filter needs to be stateful to run each digest cycle
        filter.$stateful=true;
      

        return filter; 
    }]);

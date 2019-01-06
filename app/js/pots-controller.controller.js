'use strict';

angular.module('LpcWebTest2018')
    .controller('PotsController',['$scope','PotsService',function($scope,PotsService){
        //Set last chosen language from local storage
        $scope.locale= window.localStorage['locale'] || 'fr'
        
        //Changes locale and saves it to local storage
        $scope.changeLocale = function(locale){
            $scope.locale=locale
            window.localStorage['locale'] = locale
        }

        //Consumes the PotsService service
        PotsService.get().then( function(pots) {
            $scope.pots = pots.data
        });

    }]);

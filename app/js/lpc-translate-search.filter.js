'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslateSearch',["$filter",function($filter){

        var filter = function(pots,model,locale){
            if(!pots || !model) { 
                return pots;
            }

            return pots.filter(function(pot){
               var translatedPotName = $filter('lpcTranslate')(pot.name,locale)
               return translatedPotName.toLowerCase().indexOf(model.toLowerCase()) !== -1    
            })
        

        };




        return filter;
    }])
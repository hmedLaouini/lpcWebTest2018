'use strict';

angular.module('LpcWebTest2018')
    .directive('lpcLazyBackground', [function () {
  var lpcLazyBackgroundLink = function (scope, elem, attr) {
    //add temporary loading class
    elem.addClass(attr.loadingClass);
    
    //Detects if element entered the viewport
    function isAnyPartOfElementInViewport(element) {
      
      var bounding = element.getBoundingClientRect();

      return (
          bounding.top < (window.innerHeight) &&
          bounding.left < (window.innerWidth)     
      );   
    }

    //Loads image when it enters viewport
    function loadImageInView(){
      if(isAnyPartOfElementInViewport(elem[0])){
        var downloadingImage = new Image();
        downloadingImage.src = scope.lpcLazyBackground;
        downloadingImage.onload = function() {
          //remove temporary loading class
          elem.removeClass(attr.loadingClass);
          //Add the downloaded background 
          elem[0].style.backgroundImage="url('"+downloadingImage.src+"')";
          elem[0].style.backgroundPosition="center";
        }

        //Remove unnecessary listeners
        window.removeEventListener("scroll",loadImageInView);
        window.removeEventListener("resize",loadImageInView);
      }
    }

    //Add scroll and resize listeners
    window.addEventListener("scroll",loadImageInView);
    window.addEventListener("resize",loadImageInView);

    //Load image if already in view
    loadImageInView();
  }
  return {
    restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
  }

}]);

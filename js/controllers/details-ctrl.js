'use strict';

function DetailsCtrl ($scope, $routeParams, $location, dataService) {

    var Ids = $routeParams;
    dataService.getItemById($routeParams.id).then(function(item) {
      $scope.itemDetail = item;
    });

    $scope.current = 0;
    $scope.setCurrent = function(index) {
      $scope.current = index || 0;
    };

    $scope.goToDetails = function (color) {
      dataService.getItemById(color.id).then(function(item) {

        var itemColor = '';
        var itemBrand = item.brand.split(' ').join('_');
        if (item.color.indexOf(' ') >= 0) {
           itemColor = item.color.split(' ').join('_');
        } else {
             itemColor = item.color.split('/').join('_');
        }

        var itemName = itemBrand + '_' + item.name.split(' ').join('_') + '_' + itemColor;
        $location.url('/details/' + itemName + '/' + item.id);
      });
    };

    $scope.selected = 0;
    $scope.select = function(index) {
       $scope.selected = index;
    };
};

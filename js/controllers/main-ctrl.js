'use strict';

function MainCtrl ($scope, $routeParams, $location, dataService) {

  $scope.allData = {};
  $scope.myVal = true;
  $scope.sportId = '';
  $scope.sportTitle = '';


  dataService.getData().then(function(data) {
    $scope.allData = data;
  }).catch(function(e) {
    console.log(e);
  });

  $scope.setSportId = function (sport) {
    var sport = sport.title.toLowerCase();
    $location.path('/sports/' + sport);
    $scope.sportId = sport.sportId;
  };

  $scope.sportTitle = $routeParams.sportTitle;
  // console.log($routeParams);

  // if($routeParams.sportTitle !== 'basketball' && $routeParams.sportTitle !== 'football' && $routeParams.sportTitle !== 'boxing' && $routeParams.sportTitle !== 'tennis' && $routeParams.sportTitle !== 'swimming' && $routeParams.sportTitle !== 'running' ) {
  //   $location.path("/");
  // }

  $scope.setCurrent = function () {
    this.myVal = !this.myVal;
  };

  $scope.displayItem = function () {
    $scope.shownItem = this.item;
  };

  $scope.goToDetails = function (item) {
    var itemColor = '';
    var itemBrand = item.brand.split(' ').join('_');

    if (item.color.indexOf(' ') >= 0) {
       itemColor = item.color.split(' ').join('_');
    } else {
         itemColor = item.color.split('/').join('_');
    }

    var itemName = itemBrand + '_' + item.name.split(' ').join('_') + '_' + itemColor;
    $location.path('/details/' + itemName + '/' + item.id);
  };

  $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
  };

  $scope.send = function () {
    location.reload();
  };

};

var app = angular.module('myApp', ["ngRoute"]);


app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/sports/:sportTitle', {
    templateUrl: 'views/sports.html',
    controller: 'MainCtrl'
  })
  .when('/contact',{
    templateUrl: 'views/contact.html',
    controller: 'MainCtrl'
  })
  .when('/details/:path/:id',{
    templateUrl: 'views/details.html',
    controller: 'DetailsCtrl'
  });
});

app.controller('MainCtrl', ['$scope', '$routeParams', '$location', 'dataService', MainCtrl])
   .controller('DetailsCtrl', ['$scope', '$routeParams', '$location', 'dataService', DetailsCtrl])
   .factory('dataService', ['$http', dataService]);

const app = angular.module('myApp', [require('angular-route')]);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'MainCtrl'
  })
  .when('/sports/:sportTitle', {
      templateUrl: 'views/sports.html',
      controller: 'MainCtrl',
      controllerAs: 'MainCtrl'
  })
  .when('/contact',{
      templateUrl: 'views/contact.html',
      controller: 'MainCtrl',
      controllerAs: 'MainCtrl'
  })
  .when('/details/:path/:id',{
      templateUrl: 'views/details.html',
      controller: 'DetailsCtrl',
      controllerAs: 'DetailsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  })
});

app.controller('MainCtrl', require('./controllers/main-ctrl'))
   .controller('DetailsCtrl', require('./controllers/details-ctrl'))
   .service('dataService', require('./services/data-service'));

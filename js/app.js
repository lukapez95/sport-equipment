var app = angular.module('myApp', ["ngRoute"]);



app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  // .when('/sports/:sportTitle', {
  //   templateUrl: 'views/sports.html',
  //   controller: 'MainCtrl'
  // })
  .when('/sports/:sportTitle', {
    templateUrl: function(params){
      var sportTitle = params.sportTitle;
      if (sportTitle == 'basketball' || sportTitle == 'football' || sportTitle == 'boxing' || sportTitle == 'tennis' || sportTitle == 'swimming' || sportTitle == 'running') {
        return 'views/sports.html'
      } else {
        return 'views/main.html'
      }
    },
    controller: 'MainCtrl'
  })
  .when('/contact',{
    templateUrl: 'views/contact.html',
    controller: 'MainCtrl'
  })
  .when('/details/:path/:id',{
    templateUrl: 'views/details.html',
    controller: 'DetailsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.controller('MainCtrl', ['$scope', '$routeParams', '$location', 'dataService', MainCtrl])
   .controller('DetailsCtrl', ['$scope', '$routeParams', '$location', 'dataService', DetailsCtrl])
   .factory('dataService', ['$http', dataService]);

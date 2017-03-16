'use strict';


function dataService($http) {

    var dataService = {};

    dataService.getData = function() {
        return $http.get('data.json').then(function(response) {
          return response.data;
        });
    };

    dataService.getItemById = function(id) {
      var data;
      var oneItem;

        return dataService.getData().then(function(response) {
            data = response;

            angular.forEach(data.sports, function(sport) {
                angular.forEach(sport.categories, function(category) {
                    angular.forEach(category.subCategories, function(subCategory) {
                        angular.forEach(subCategory.items, function(item) {

                          if (item.id == id) {
                             return oneItem = item;

                          }
                        });
                    });
                });
            });
            return oneItem;
          });

    };

  return dataService;
};

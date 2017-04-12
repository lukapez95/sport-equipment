'use strict';

class DetailsCtrl {

    constructor ($scope, $routeParams, $location, dataService) {
        this.$scope = $scope;
        this.$routeParams = $routeParams;
        this.$location = $location;
        this.dataService = dataService;

        $scope.current = 0;
        $scope.selected = 0;

        dataService.getItemById($routeParams.id).then(function(item) {
            $scope.itemDetail = item.data;
        });

    }

    setCurrent (index){
        this.$scope.current = index || 0;
    }

    select (index){
        this.$scope.selected = index;
    }

    goToDetails (color){
        this.dataService.getItemById(color.id).then( (item) => {
            let itemColor = '';
            let itemBrand = item.data.brand.split(' ').join('_');
            if (item.data.color.indexOf(' ') >= 0) {
                itemColor = item.data.color.split(' ').join('_');
            } else {
                itemColor = item.data.color.split('/').join('_');
            }
            let itemName = itemBrand + '_' + item.data.name.split(' ').join('_') + '_' + itemColor;
            this.$location.url('/details/' + itemName + '/' + item.data.id);
        })
    }

}

DetailsCtrl.$inject = ['$scope', '$routeParams', '$location', 'dataService'];
module.exports  = DetailsCtrl;

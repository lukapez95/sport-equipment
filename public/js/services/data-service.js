'use strict';

class dataService{

    constructor ($http) {
        this.$http = $http;
    }

    getData () {
         return this.$http.get('/api/data');
    }

    getItemById(id) {
        return this.$http.get('/api/item/' + id);
    }


    static findInJsonById(data, id) {
        for(let i = 0; i < data.sports.length; i++) {
            for(let j = 0; j < data.sports[i].categories.length; j++) {
                for(let k = 0; k < data.sports[i].categories[j].subCategories.length; k++) {
                    for(let l = 0; l < data.sports[i].categories[j].subCategories[k].items.length; l++) {
                        if(data.sports[i].categories[j].subCategories[k].items[l].id === id) {
                            return data.sports[i].categories[j].subCategories[k].items[l];
                        }
                    }
                }
            }
        }
    }
}

dataService.$inject = ['$http'];
module.exports  = dataService;



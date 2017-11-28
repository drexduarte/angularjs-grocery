(function() {
    'use strict';

    angular
        .module('app.controllers')
        .controller('ItemController', ItemController);

    ItemController.$inject = ["$routeParams","$location", "GroceryService"];

    function ItemController($routeParams, $location, GroceryService) {    
        var vm = this;
        vm.saveItem = saveItem;

        if(!$routeParams.id){
            vm.groceryItem = {id: 0, name: "", completed: false};
        }else{
            vm.groceryItem = _.clone(GroceryService.findById(parseInt($routeParams.id)));
        }

        function saveItem(){
            GroceryService.saveItem(vm.groceryItem);
            $location.path("/");
        }
    }
})();
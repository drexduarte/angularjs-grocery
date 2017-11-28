(function () {
    'use strict';

    angular
        .module('app.controllers')
        .controller('GroceryListController', GroceryListController);

    GroceryListController.$inject = ["GroceryService"];

    function GroceryListController(GroceryService) {
        var vm = this;
        vm.removeItem = removeItem;
        vm.markCompleted = markCompleted;

        init();

        function init() {
            loadList();
        }

        function loadList() {
            if (!GroceryService.items) {
                GroceryService.loadList()
                    .then(function (items) {
                        vm.items = items;
                    });
            }else{
                vm.items = GroceryService.items;
            }

        }

        function removeItem(item) {
            GroceryService.removeItem(item);
        };

        function markCompleted(item) {
            GroceryService.markCompleted(item);
        }
    }
})();
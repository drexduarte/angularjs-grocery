(function () {
    'use strict';

    angular
        .module('app.services')
        .service('GroceryService', GroceryService);

    GroceryService.$inject = ["$http"];

    function GroceryService($http) {
        var vm = this;
        vm.saveItem = saveItem;
        vm.removeItem = removeItem;
        vm.getNewId = getNewId;
        vm.findById = findById;
        vm.markCompleted = markCompleted;
        vm.loadList = loadList;

        function saveItem(entry) {
            var updatedItem = findById(entry.id);
            if (updatedItem) {
                updatedItem.name = entry.name;
                updatedItem.quantity = entry.quantity;
            } else {
                entry.id = getNewId();
                vm.items.push(entry);
            }
        };

        function removeItem(item) {
            var index = vm.items.indexOf(item);
            vm.items.splice(index, 1);
        };

        function getNewId() {
            if (vm.newId) {
                vm.newId++;
            } else {
                vm.newId = (_.max(vm.items, function (entry) { return entry.id; }).id || 0) + 1;
            }
            return vm.newId;
        };

        function findById(id) {
            for (var item in vm.items) {
                if (vm.items[item].id == id) {
                    return vm.items[item];
                }
            }
        };

        function markCompleted(item) {
            item.completed = !item.completed;
        };

        function loadList() {
            return $http.get("data/server_data.json")
                .then(function successCallback(response) {
                    vm.items = response.data;
                    return vm.items;
                },
                function errorCallback(error) {
                    console.log(error);
                    vm.items = [];
                    return vm.items;
                });
        }
    }
})();
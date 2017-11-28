angular
    .module('groceryListApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/views/groceryList.html",
                controller: "GroceryListController",
                controllerAs: 'vm'
            })
            .when("/addItem", {
                templateUrl: "app/views/newItem.html",
                controller: "ItemController",
                controllerAs: 'vm'
            })
            .when("/addItem/edit/:id/", {
                templateUrl: "app/views/newItem.html",
                controller: "ItemController",
                controllerAs: 'vm'
            })
    });

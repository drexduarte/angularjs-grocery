(function() {
    'use strict';

    angular
        .module('groceryListApp')
        .directive('groceryItem', Directive);

    function Directive() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/views/groceryItem.html'
        };
        
        return directive;
    }
})();
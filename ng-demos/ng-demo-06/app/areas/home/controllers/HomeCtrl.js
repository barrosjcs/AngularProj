(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$route', '$location', 'CustomerRepository'];

    function HomeCtrl($scope, $route, $location, CustomerRepository) {
        console.log('Entrou em HomeCtrl');
        $scope.title = "Clientes Cadastrados";
        $scope.$route = $route;
        $scope.$location = $location;

        function LoadCustomers() {

        }
    }
})();

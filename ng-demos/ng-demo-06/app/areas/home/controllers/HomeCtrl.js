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

        $scope.customers = [];

        LoadCustomers();

        function LoadCustomers() {
            // O $http.get é assíncrono, então precisará esperar até ele ter todas as informações para usa-lo,
            // com isso utiliza-se o .then
            var customers = CustomerRepository.getAllCustomers();

            customers.then(
                function (result) {
                    $scope.customers = result.data;
                },
                function (error) {

                });
        }
    }
})();

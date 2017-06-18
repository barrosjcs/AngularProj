(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$route', '$location'];

    function HomeCtrl($scope, $route, $location) {
        console.log('Entrou em HomeCtrl');
        $scope.title = "Clientes Cadastrados";
        $scope.$route = $route;
        $scope.$location = $location;
    }
})();

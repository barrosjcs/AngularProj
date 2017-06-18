(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngAnimate']);    

    app.config(function ($routeProvider, $locationProvider) {
        //debugger;
        console.log('routeProvider');
        $routeProvider
            .when('/index6.html', {
                controller: 'HomeCtrl',
                templateUrl: 'app/areas/home/views/indexInner6.html'
            })
            .otherwise({
                controller: 'HomeCtrl',
                templateUrl: '404.html'
            });

        // CASO NÃO QUEIRA PASSAR A TAG BASE AO USAR ESTE OBJETO
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
    });

    //app.run(['$rootScope', function($rootScope) {
    //    $rootScope.$on('$routeChangeStart', function(event, next, current) {
    //        console.log('Mudou');
    //        console.log(current);
    //        console.log(next);
    //    });

    //    $rootScope.$on('routeChangeSuccess', function (event, current, previous) {
    //        console.log('Sucesso');
    //        console.log(current);
    //        console.log(previous);
    //    });

    //    $rootScope.$on('routeChangeError', function (event, current, previous, rejection) {
    //        console.log('Erro');
    //        console.log(current);
    //        console.log(previous);
    //    });
    //}]);
})();
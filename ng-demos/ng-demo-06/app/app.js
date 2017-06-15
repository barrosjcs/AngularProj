(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngAnimate']);    

    app.config(function ($routeProvider, $locationProvider) {
        //debugger;
        console.log('routeProvider');
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'app/areas/home/views/indexInner6.html'
            })
            .otherwise({
                //redirectTo: '404.html'
                controller: 'HomeCtrl',
                templateUrl: 'app/areas/home/views/indexInner6.html'
            })

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });

    //app.run(['$rootScope', function($rootScope) {
    //    $rootScope.$on('$routeChangeStart', function(event, next, current) {
    //        console.log('Mudou');
    //        console.log(current);
    //        console.log(next);
    //    });

    //    $rootScope.$on('routeChangeSuccess', function (event, next, current) {
    //        console.log('Erro');
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
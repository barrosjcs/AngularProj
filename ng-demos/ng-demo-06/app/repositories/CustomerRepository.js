﻿(function () {
    'use strict';

    angular
        .module('app')
        .factory('CustomerRepository', CustomerRepository);

    CustomerRepository.$inject = ['$http'];

    function CustomerRepository($http) {
        return {
            getAllCustomer: function () {
                return $http.get('app/data/customers.json');
            }
        }
    }
})();
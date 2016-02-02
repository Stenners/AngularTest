'use strict';

angular.module('myApp.view1', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', function($scope, $firebaseArray) {
    var ref = new Firebase("https://blinding-fire-117.firebaseio.com/rubia/appointments");
    $scope.appointments = $firebaseArray(ref);
});

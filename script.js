// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope, $window, $http) {
    $scope.searchThesaurus = function (item) {
        //$window.alert(item);
        var url = "http://words.bighugelabs.com/api/2/a5660259832107069a17d6639b6b0a70/" + item + "/json";
        $http.get(url).success(function (response) {
            $scope.students = response;
        });
    };
});

scotchApp.controller('aboutController', function ($scope, $window, $http) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function ($scope, $window, $http) {
    $scope.message = 'Look! I am an Contact page.';
});

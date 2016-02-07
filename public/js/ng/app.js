// Initialize AngularBlogApp.
var app = angular.module('AngularBlogApp', ['ngRoute'])

// Define routes.
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MainCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/main.html'
  }).when('/joey', {
    controller: 'JoeyCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/joey.html'
  }).otherwise({
    redirectTo: '/'
  });
}])

// Define controllers.
.controller('MainCtrl', ['$scope', function($scope) {
  /* $http({
    method: 'GET',
    url: '/posts'
  }).success(function(res) {
    $scope.posts = res;
  }); */

  $scope.title = 'Blog';
}])

.controller('JoeyCtrl', ['$scope', function($scope) {
  $scope.title = 'Joey\'s Page';
  $scope.message = 'Hey there, this is my page!';
}]);

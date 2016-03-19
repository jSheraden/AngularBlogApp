// Initialize AngularBlogApp.
var app = angular.module('AngularBlogApp', ['ngRoute'])

// Define routes.
.config(['$routeProvider', function($routeProvider) {
  // Route for home page.
  $routeProvider.when('/', {
    controller: 'MainCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/main.html'
  })

  // Route for showing an individual post.
  .when('/post/:id/:slug', {
    controller: 'ShowCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/show.html'
  })

  // Route for creating a new post.
  .when('/new', {
    controller: 'NewCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/new.html'
  })
  
  // Route for editing a post.
  .when('/post/:id/edit', {
    controller: 'EditCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/edit.html'
  })

  // Route for deleting a post.
  .when('/post/:id/delete', {
    controller: 'DeleteCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/delete.html'
  })

  // Route for Joey's page.
  .when('/joey', {
    controller: 'JoeyCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/joey.html'
  })

  // Any other URI redirects to the home page.
  .otherwise({
    redirectTo: '/'
  });
}])

// Controller for home page.
.controller('MainCtrl', ['$scope', function($scope) {
  $http({
    method: 'GET',
    url: '/posts'
  }).success(function(res) {
    $scope.posts = res;
  });

  $scope.title = 'Blog';
}])

// Controller for viewing an individual post.
.controller('ShowCtrl', ['$scope', function($scope) {

}])

// Controller for creating a new post.
.controller('NewCtrl', ['$scope', function($scope) {
}])

// Controller for editing a post.
.controller('EditCtrl', ['$scope', function($scope) {

}])

// Controller for deleting a post.
.controller('DeleteCtrl', ['$scope', function($scope) {

}])

// Controller for my page.
.controller('JoeyCtrl', ['$scope', function($scope) {
  $scope.title = 'Joey\'s Page';
  $scope.message = 'Hey there, this is my page!';
}]);

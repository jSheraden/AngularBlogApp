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

  // Route for creating a new post.
  .when('/new', {
    controller: 'NewCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/new.html'
  })
  
  // Route for showing an individual post.
  .when('/post/:id/:slug', {
    controller: 'ShowCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/show.html'
  })

  // Alternate route for showing posts.
  .when('/post/:id', {
    controller: 'ShowCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/show.html'	
  })
  
  // Route for editing a post.
  .when('/post/edit/:id', {
    controller: 'EditCtrl',
    controllerAs: 'app',
    templateUrl: '/js/ng/partials/edit.html'
  })

  // Route for deleting a post.
  .when('/post/delete/:id', {
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
.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/posts/postlist').success(function(res) {
    $scope.posts = res;
  });

  $scope.title = 'Blog';
}])

// Controller for creating a new post.
.controller('NewCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  // Post new article to the database.
  $scope.postNewArticle = function() {
    $http.post('/posts/addpost', {
      author: $scope.author,
	  title: $scope.postTitle,
	  slug: $scope.getPostSlug(),
	  date: $scope.getPostDate(),
	  body: $scope.body
	}).success(function(data) {
      $location.path('/');
    });
  }
  
  // Get slug for new post.
  $scope.getPostSlug = function() {
    return null;
  }
  
  // Get date for new slug.
  $scope.getPostDate = function() {
    return null;
  }
  
  $scope.title = 'New Post';
}])

// Controller for viewing an individual post.
.controller('ShowCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/posts/showpost/' + $routeParams.id).success(function(res) {
    $scope.post = res[0];
	$scope.title = $scope.post.title;
  });
}])

// Controller for editing a post.
.controller('EditCtrl', ['$scope', function($scope) {

}])

// Controller for deleting a post.
.controller('DeleteCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.delete('/posts/deletepost/' + $routeParams.id).success(function() {
    $location.path('/');
  });
}])

// Controller for my page.
.controller('JoeyCtrl', ['$scope', function($scope) {
  $scope.title = 'Joey\'s Page';
  $scope.message = 'Hey there, this is my page!';
}]);

var app = angular.module( 'AngularBlogApp', [ 'ngRoute' ] );

app.config( [ '$routeProvider', function( $routeProvider ) {
    $routeProvider.when( '/', {
        controller: 'MainCtrl',
        controllerAs: 'app',
        templateUrl: '/js/ng/partials/main.html'
    } );
    
    $routeProvider.otherwise( { redirectTo: '/' } );
} ] );

app.controller( 'MainCtrl', [ '$scope', function( $scope ) {
    $scope.title = 'Home';
    $scope.message = 'This is the home page.';
} ] );

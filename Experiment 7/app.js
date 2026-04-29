// Initialize the AngularJS module
// The 'ng-app' directive in HTML must match this name
var app = angular.module('helloApp', []);

// Define the controller
// The 'ng-controller' directive in HTML must match this name
app.controller('HelloController', function($scope) {
    
    // Initialize the $scope.name variable
    // This is bound to the input field via ng-model="name"
    $scope.name = '';

    // If we wanted to initialize it with a default name, we could do:
    // $scope.name = 'John Doe';
    // However, keeping it empty allows the expression {{ name || 'World' }} 
    // to default to 'World' beautifully.
});

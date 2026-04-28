// Initialize AngularJS module
var app = angular.module('studentApp', []);

// Create StudentController
app.controller('StudentController', function($scope, $timeout) {
    
    // Initialize array to hold student records
    $scope.students = [
        {
            rollNo: 'CS202401',
            fullName: 'Jane Smith',
            email: 'jane.smith@university.edu',
            age: 20,
            course: 'Computer Science'
        }
    ];
    
    // Initialize new student model
    $scope.newStudent = {};
    
    // UI State variables
    $scope.successMessage = '';
    $scope.hoveredIndex = null;
    $scope.searchText = '';

    // Function to handle form submission
    $scope.addStudent = function(isValid) {
        // Check if the form is valid using Angular's $valid property
        if (isValid) {
            // Push a copy of the new student object to the array
            $scope.students.push(angular.copy($scope.newStudent));
            
            // Show success message
            $scope.successMessage = 'Student record added successfully!';
            
            // Reset the form model
            $scope.newStudent = {};
            
            // Reset the form states ($pristine, $touched, etc)
            $scope.studentForm.$setPristine();
            $scope.studentForm.$setUntouched();
            
            // Hide the success message after 3 seconds
            $timeout(function() {
                $scope.successMessage = '';
            }, 3000);
        }
    };

    // Event handler for removing a student (ng-click)
    $scope.removeStudent = function(index) {
        $scope.students.splice(index, 1);
    };

    // Event handler for row hover (ng-mouseenter, ng-mouseleave)
    $scope.hoverRow = function(index) {
        $scope.hoveredIndex = index;
    };
});

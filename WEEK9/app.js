var app = angular.module("myApp", []);

app.controller("MainController", function ($scope, $timeout) {

    // User Object
    $scope.user = {
        name: "",
        age: null
    };

    // Message
    $scope.message = "";

    $scope.generateMessage = function () {
        if ($scope.user.name && $scope.user.age) {
            $scope.message = "✨ Awesome " + $scope.user.name + "! You are " + $scope.user.age + " and doing absolutely great!";
        } else if ($scope.user.name) {
            $scope.message = "👋 Hello " + $scope.user.name + "! Don't forget to enter your age too.";
        } else {
            $scope.message = "⚠️ Please fill in all details to get your magic message!";
        }
    };

    // Theme Management
    $scope.theme = "Dark"; // Defaulting to Dark mode based on premium design principles

    $scope.toggleTheme = function () {
        if ($scope.theme === "Light") {
            $scope.theme = "Dark";
        } else {
            $scope.theme = "Light";
        }

        // Timeout to ensure DOM is updated before lucide recreates icons
        $timeout(function () {
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }, 0);
    };

    // Hobby List Management
    $scope.hobbies = [];
    $scope.newHobby = "";

    $scope.addHobby = function () {
        if ($scope.newHobby && $scope.newHobby.trim() !== "") {
            // Prevent exact duplicates
            if ($scope.hobbies.indexOf($scope.newHobby.trim()) === -1) {
                $scope.hobbies.push($scope.newHobby.trim());
            }
            $scope.newHobby = "";

            // Refresh icons for new elements
            $timeout(function () {
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            }, 0);
        }
    };

    $scope.removeHobby = function (index) {
        $scope.hobbies.splice(index, 1);
    };
});

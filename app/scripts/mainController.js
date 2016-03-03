'use strict';

angular.module('dualListBox')
  .controller('mainController', function ($scope) {

    $scope.left = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
    $scope.right = ['Option 7', 'Option 8', 'Option 9', 'Option 10'];
  });

'use strict';

angular.module('dualListBox')
  .controller('mainController', function ($scope) {

    $scope.left = ['België', 'BUO', 'BUZ', 'Data Solutions', 'De Vries', 'ISRES', 'Kennis Centrum'];
    $scope.right = ['BUF', 'BUI'];
  });

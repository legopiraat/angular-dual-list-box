'use strict';

angular.module('dualListBox')
  .directive('dualListBox', function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'views/dual-list-box-template.html',
      scope: {
        optionsLeft: '=',
        optionsRight: '='
      },
      controller: function ($scope) {
        /**
         * Move the selected element to the right list.
         *
         * @param selectedValue
         */
        $scope.moveToRight = function (selectedValue) {
          for (var i = 0; i < selectedValue.length; i++) {
            $scope.optionsRight.push(selectedValue[i]);
            $scope.optionsLeft.splice($scope.optionsLeft.indexOf(selectedValue[i]), 1);
          }

          $scope.selectedLeft = undefined;
        };

        /**
         * Move all the elements to the right list.
         */
        $scope.moveAllToRight = function () {
          for (var i = 0; i < $scope.optionsLeft.length; i++) {
            $scope.optionsRight.push($scope.optionsLeft[i]);
          }

          $scope.optionsLeft = [];
        };

        /**
         * Move the selected element to the left list.
         *
         * @param selectedValue
         */
        $scope.moveToLeft = function (selectedValue) {
          for (var i = 0; i < selectedValue.length; i++) {
            $scope.optionsLeft.push(selectedValue[i]);
            $scope.optionsRight.splice($scope.optionsRight.indexOf(selectedValue[i]), 1);
          }

          $scope.selectedRight = undefined;
        };

        /**
         * Move all the elements to the left list.
         */
        $scope.moveAllToLeft = function () {
          for (var i = 0; i < $scope.optionsRight.length; i++) {
            $scope.optionsLeft.push($scope.optionsRight[i]);
          }

          $scope.optionsRight = [];
        };
      }
    };
  });

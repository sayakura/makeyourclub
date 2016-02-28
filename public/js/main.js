var app = angular.module("launchApp",["firebase","ngRoute"]);


app.controller('formCtrl',["$scope","$firebaseArray",
  function($scope,$firebaseArray){

    $scope.logo = "Description";
    console.log("debug");

    var ref = new Firebase("https://torrid-fire-1367.firebaseio.com/club");
    $scope.clubProfile = $firebaseArray(ref);
    $scope.club = {};

    $scope.registerR = function(){
      Materialize.toast('Successful!!!', 2000,'',function(){
        window.location.href = "/club_page.html";
      });

    };

    $scope.submitClub = function(){
      $scope.clubProfile.$add($scope.club);
      $scope.club = {};
      console.log("submited!");
      $('#modal1').closeModal();
      $scope.registerR();
  }
}]);

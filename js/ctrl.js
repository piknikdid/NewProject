var menuApp = angular.module('menuApp', ['ngRoute']);

menuApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'template/home.html',
      contoller: 'MenuAppCtrl'
    })
    .when('/app1', {
      templateUrl:'template/app1',
      contoller:'FirstAppCtrl'
    })
    .when('/app2', {
      templateUrl:'template/app2',
      contoller:'SexondAppCtrl'
    })
    .when('/app3', {
      templateUrl:'template/app3',
      contoller:'ThirdAppCtrl'
    })
    .when('/register', {
      templateUrl:'template/register',
      contoller:'registerCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
}])

menuApp.controller('MenuAppCtrl',['$scope','$http',  function($scope, $http){
$scope.email = '';
$scope.mPost = function() {

  var data = {email: $scope.email};

  $http.post('/register', data).then(function (data,status){
    console.log(data, status);
  })
}
}]);

var menuApp = angular.module('menuApp', ['ngRoute']);

menuApp.config('$routeProvider', function($routeProvider){
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
    .otherwise({
      redirectTo: '/'
    })
})

menuApp.contoller('MenuAppCtrl',[ '$scope',  function($scope){
$scope.email = "";
$scope.password = "ss";
}]);

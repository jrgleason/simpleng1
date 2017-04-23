(function(){
  var module = angular.module("test", ['ngRoute']);
  var TestController = function($scope){
    var _this = this;
  }
  var RegularController = function(){
  }
  var SearchController = function($scope, $routeParams){
    $scope.text = $routeParams.text;
  }
  module.directive("jgTest", function(){
    return {
      template: "<h1>Hello</h1>",
      controller: TestController,
      controllerAs: "tc"  
    }
  })
  module.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      template: '<h1>Regular</h1>',
      controller: RegularController,
    })
    .when('/search/:text', {
      template: '<h1>{{text}}</h1>',
      controller: SearchController
    });
  });
})()

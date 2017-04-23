(function(){
  var module = angular.module("test", ['ngRoute']);
  var TestController = function($scope){
    var _this = this;
  }
  var RegularController = function($scope, $location){
    var _this = this;
    this.text = "";
    this.call = function(){
      $location.path('/search/'+_this.text);
    };
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
      template: '<div><h1>Regular</h1><input ng-model="rc.text" /><div ng-click="rc.call()">Search</div></div>',
      controller: RegularController,
      controllerAs: "rc"
    })
    .when('/search/:text', {
      template: '<h1>{{text}}</h1>',
      controller: SearchController
    });
  });
})()

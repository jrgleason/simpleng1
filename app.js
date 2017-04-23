(function(){
  var module = angular.module("test", []);
  var TestController = function($scope){
    var _this = this;
  }
  module.directive("jgHello", function(){
    return {
      template: "<h1>Hello</h1>",
      controller: TestController,
      controllerAs: "tc"  
    }
  }
})()

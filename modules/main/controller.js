/**
 * Created by haha on 2017/1/5.
 */
(function(angular){
    //依赖模块注入
    var app = angular.module('myApp',[
        'routeApp'//主路由模块，用来调配其他子模块
    ]);
    app.controller('myCtr',['$scope',function($scope){

    }])




})(angular);

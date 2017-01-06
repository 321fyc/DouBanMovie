/**
 * Created by haha on 2017/1/5.
 */
(function(angular){
//正在热映路由模块，注入依赖模块-->theatersCtrApp控制器模块
    var app = angular.module('theaterRouteApp',['theatersCtrApp']);
//配置路由表，该路由表可以匹配正在热映，即将上映，top250,上下翻页，电影搜索对应的hash值，匹配成功后方可进入控制器，进行数据请求
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider
            .when('/movie/:type/:page?/:q?',{
                templateUrl:'modules/in_theaters/template.html',
                controller:"theatersCtr"
            });
        $locationProvider.hasOwnProperty("");
    }])

})(angular);

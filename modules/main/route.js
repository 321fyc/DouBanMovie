/**
 * Created by haha on 2017/1/5.
 */
(function(angular){
//主路由模块
    var app = angular.module('routeApp',[
        'ngRoute',
        'theaterRouteApp',//正在热映模块,该模块里面的路由表可以匹配地址中格式类似的hash值，然后进入该控制器，请求数据。
        'subjectsRouteApp',//电影条目信息路由模块，点击电影，地址中就有了对应的参数，通过匹配进入对应的控制器模块，然后得到对应的id参数，请求数据
        'getJsonpServiceApp',//分模块都可以使用这个服务里面的请求数据方法getJsonp
        'searchAPP'//更新地址栏中的hash值参数，经过在theaterRouteApp中重新匹配以后，再次请求数据，此时q就有值了
    ]);
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider
            .otherwise('/movie/in_theaters');
        $locationProvider.hashPrefix("");//兼容之前的angular版本

    }])





})(angular);

/**
 * Created by haha on 2017/1/6.
 */
(function(angular){
//搜索电影路由模块，通过路由表匹配地址中的hash值，进入对应的控制器
    var app = angular.module('subjectsRouteApp',['subjectsCtrApp']);
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider
            .when('/subject/:id',{
                templateUrl:'modules/subjects/template.html',
                controller:"subjectsCtr"
            });
        $locationProvider.hashPrefix("");
    }])
})(angular);
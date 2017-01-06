/**
 * Created by haha on 2017/1/6.
 */
(function(angular){
    //条目信息模块，匹配路由表成功后，方可进入该控制器，进而得到地址中的id值（每条电影都有）、数据请求
    var app = angular.module('subjectsCtrApp',[]);
    //注入相关服务
    app.controller('subjectsCtr',['$scope','getJsonp','$routeParams',function($scope,getJsonp,$routeParams){
        getJsonp.getData('https://api.douban.com/v2/movie/subject/'+$routeParams.id,{
            apikey:'00fa6c0654689a0202ef4412fd39ce06'
        },function(data){
            $scope.data = data;
            $scope.$apply();
        })
    }])

})(angular);

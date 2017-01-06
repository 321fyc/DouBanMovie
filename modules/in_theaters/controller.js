/**
 * Created by haha on 2017/1/5.
 */
(function(angular){
    //正在热映模块
    var app = angular.module('theatersCtrApp',[]);
    //注入服务$scope、自定义请求数据的服务getJsonp、操作路由的服务$routeParams、$route、
    app.controller('theatersCtr',['$scope','getJsonp','$routeParams','$route',function($scope,getJsonp,$routeParams,$route){

        //当点击上下翻页时，更新地址中hash值的参数
        $scope.upPage = function(){
            if($scope.page>1){
                $route.updateParams({page:$scope.page-1})
            }
        };
        $scope.downPage =function(){
            if($scope.page<$scope.maxPage){
                $route.updateParams({page:$scope.page+1})
            }
        };

        var search = $routeParams.q===undefined?"":$routeParams.q; //影片搜索内容
        $scope.title = "亲爱的亲,稍等哒！！！";//大标题
        $scope.page = parseInt($routeParams.page)||1;//当前第几页，根据hash值中的参数得到，默认为第一页
        $scope.pageCount = 5;//每一页最多放的条数
        $scope.maxPage = $scope.page;//最大有几页
        getJsonp.getData('https://api.douban.com/v2/movie/'+$routeParams.type,{
            q:search,//搜索内容
            apikey:'00fa6c0654689a0202ef4412fd39ce06',
            start: ($scope.page-1)*$scope.pageCount,//告诉服务器我请求的数据是从第几条开始的
            count:5//告诉服务器我每一次请求的条数是多少
        },function(data){
            $scope.title = data.title;
            $scope.total = data.total;
            $scope.subjects = data.subjects;//每条电影相关信息
            $scope.maxPage = Math.ceil(data.total/$scope.pageCount);//根据电影总数，和每页放置的条数，计算页数
            $scope.$apply();//更新数据
        })



    }])



})(angular);


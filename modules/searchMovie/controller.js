/**
 * Created by haha on 2017/1/6.
 */
(function(angular){
    //搜索模块，该模块主要用来暴露一个方法，回车键按下时调用该方法，进而更新地址，路由表匹配，数据请求
    var app = angular.module('searchAPP',[]);
    app.controller('searchCtr',['$scope','$routeParams','$route',function($scope,$routeParams,$route){
        $scope.searchMovie = function(){
            //$scope.searchText是绑定在input中的搜索内容
            if($scope.searchText.length>0){
                $route.updateParams({type:'search',q:$scope.searchText})
            }
        };

    }])




})(angular);

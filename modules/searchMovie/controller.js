/**
 * Created by haha on 2017/1/6.
 */
(function(angular){
    //����ģ�飬��ģ����Ҫ������¶һ���������س�������ʱ���ø÷������������µ�ַ��·�ɱ�ƥ�䣬��������
    var app = angular.module('searchAPP',[]);
    app.controller('searchCtr',['$scope','$routeParams','$route',function($scope,$routeParams,$route){
        $scope.searchMovie = function(){
            //$scope.searchText�ǰ���input�е���������
            if($scope.searchText.length>0){
                $route.updateParams({type:'search',q:$scope.searchText})
            }
        };

    }])




})(angular);

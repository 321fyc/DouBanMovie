/**
 * Created by haha on 2017/1/6.
 */
(function(angular){
    //��Ŀ��Ϣģ�飬ƥ��·�ɱ�ɹ��󣬷��ɽ���ÿ������������õ���ַ�е�idֵ��ÿ����Ӱ���У�����������
    var app = angular.module('subjectsCtrApp',[]);
    //ע����ط���
    app.controller('subjectsCtr',['$scope','getJsonp','$routeParams',function($scope,getJsonp,$routeParams){
        getJsonp.getData('https://api.douban.com/v2/movie/subject/'+$routeParams.id,{
            apikey:'00fa6c0654689a0202ef4412fd39ce06'
        },function(data){
            $scope.data = data;
            $scope.$apply();
        })
    }])

})(angular);

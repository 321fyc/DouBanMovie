/**
 * Created by haha on 2017/1/5.
 */
(function(angular){
//������ӳ·��ģ�飬ע������ģ��-->theatersCtrApp������ģ��
    var app = angular.module('theaterRouteApp',['theatersCtrApp']);
//����·�ɱ���·�ɱ����ƥ��������ӳ��������ӳ��top250,���·�ҳ����Ӱ������Ӧ��hashֵ��ƥ��ɹ��󷽿ɽ����������������������
    app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider
            .when('/movie/:type/:page?/:q?',{
                templateUrl:'modules/in_theaters/template.html',
                controller:"theatersCtr"
            });
        $locationProvider.hasOwnProperty("");
    }])

})(angular);

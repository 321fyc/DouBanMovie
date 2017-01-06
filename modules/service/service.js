/**
 * Created by haha on 2017/1/5.
 */
(function(angular){
    var app = angular.module('getJsonpServiceApp',[]);
    app.service('getJsonp',[function(){
        this.getData = function(url,params,successCallBack){
            var jsonpcallback = 'jsonpcallback'+ (new Date()).getTime();//添加随机的名字
            var strUrl=url+'?';//创建新的地址
            //循环params参数，拼接地址url
            for(key in params){
                strUrl+=key+'='+params[key]+'&'
            }
            strUrl+='callback='+jsonpcallback;//拼接回调函数
            var script=document.createElement('script');//创建script标签
            script.src=strUrl;
            document.body.appendChild(script);//添加script标签到body
            //创建全局的方法，在这个全局的方法中调用回调函数，并且将jsonp中的数据传递给回调函数
            window[jsonpcallback]=function (data) {
                successCallBack(data);
                document.body.removeChild(script); //删除script标签
            };

        }

    }])

})(angular);
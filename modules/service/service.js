/**
 * Created by haha on 2017/1/5.
 */
(function(angular){
    var app = angular.module('getJsonpServiceApp',[]);
    app.service('getJsonp',[function(){
        this.getData = function(url,params,successCallBack){
            var jsonpcallback = 'jsonpcallback'+ (new Date()).getTime();//������������
            var strUrl=url+'?';//�����µĵ�ַ
            //ѭ��params������ƴ�ӵ�ַurl
            for(key in params){
                strUrl+=key+'='+params[key]+'&'
            }
            strUrl+='callback='+jsonpcallback;//ƴ�ӻص�����
            var script=document.createElement('script');//����script��ǩ
            script.src=strUrl;
            document.body.appendChild(script);//���script��ǩ��body
            //����ȫ�ֵķ����������ȫ�ֵķ����е��ûص����������ҽ�jsonp�е����ݴ��ݸ��ص�����
            window[jsonpcallback]=function (data) {
                successCallBack(data);
                document.body.removeChild(script); //ɾ��script��ǩ
            };

        }

    }])

})(angular);
var baseUrl = 'http://192.168.10.99:8090',
     token = '',
     nickname='',
     url2='',
     id=''
     tab=[],
     accessData=[],
     localPage="http://127.0.0.1:63342/kjj";
function errmsg(res){
    if(res.errcode='10007'){
        //跳转到登录页
        parent.parent.location.href=localPage+"/Login.html";
    }else{
        layer.msg(res.msg);
    }
}


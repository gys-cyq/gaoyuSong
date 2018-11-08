var baseUrl = 'http://58.221.146.166:9200',
     token = '',
     nickname='',
     url2='',
     id=''
     tab=[],
     actions=[],
     accessData=[],
     localPage="";
function errmsg(res){
    if(res.errcode='10007'){
        //跳转到登录页
        parent.parent.location.href=localPage+"/Login.html";
    }else{
        layer.msg(res.msg);
    }
}


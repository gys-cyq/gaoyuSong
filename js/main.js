var baseUrl = 'http://192.168.10.99:8090',
// http://58.221.146.166:9200
     token = '',
     nickname='',
     url2='',
     id=''
     tab=[],
     actions=[],
     accessData=[],
     localPage="http://127.0.0.1:63342/kjj";
function errmsg(res){
    if(res.errcode=='10007'){
        //跳转到登录页
        parent.parent.location.href=localPage+"/Login.html";
    }else{
        layer.msg(res.msg);
    }
}
function only_num(obj) {
    //得到第一个字符是否为负号
    var num = obj.value.charAt(0);
    //先把非数字的都替换掉，除了数字和.
    obj.value = obj.value.replace(/[^\d\.]/g, '');
    //必须保证第一个为数字而不是.
    obj.value = obj.value.replace(/^\./g, '');
    //保证只有出现一个.而没有多个.
    obj.value = obj.value.replace(/\.{2,}/g, '.');
    //保证.只出现一次，而不能出现两次以上
    obj.value = obj.value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
    //如果第一位是负号，则允许添加
    if (num == '-') {
        obj.value = '-' + obj.value;
    }
}


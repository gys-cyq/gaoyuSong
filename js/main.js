// document.write("<script language=javascript src='../static/js/admin.js'></script>");
var baseUrl = 'http://192.168.10.99:8090', //',http://58.221.146.166:9200
    token = '',
    nickname = '',
    url2 = '',
    id = ''
tab = [],
    actions = [],
    accessData = [],
    localPage = "http://127.0.0.1:63342/kjj";
function errmsg(res) {
    if (res.errcode == '10007') {
        //跳转到登录页
        var tabtitle = $(".layui-tab-title li");
        var ids = new Array();
        $.each(tabtitle, function (i) {
            ids[i] = $(this).attr("lay-id");
        })
        tab.tabDeleteAll(ids);
        parent.parent.location.href = localPage + "/Login.html";
    } else {
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
    // 如果第一位是负号，则允许添加
    // if (num == '-') {
    //     obj.value = '-' + obj.value;
    // }

}
function num(obj) {
    obj.value = obj.value.replace(/\D|^0/g, '')
}
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if (r != null) return unescape(r[2]); return null;
}

//手机号验证
function checkMolie(str) {
    if (str == null || str.length == 0) {
        return true;
    } else {
        var re = /^((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+(\d{8})$/;
        if (re.test(str)) {
            return true
        } else {
            return false;
        }
    }

}
//联系电话验证
function checkTel(phone) {
    if (phone == null || phone.length == 0) {
        return true;
    } else {
        if (!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(phone)) {

            return false;
        } else {
            return true;
        }
    }


}
function cancel() {
    var index = parent.layer.getFrameIndex(window.name);
    parent.layer.close(index);

}
var debug = true;
function consoleUtils(message) {
    if (debug) {
        console.log(message)
    }
}
function duplicate(fileList) {
    var new_arr = [];
    for (var i = 0; i < fileList.length; i++) {
        var items = fileList[i];
        //判断元素是否存在于new_arr中，如果不存在则插入到new_arr的最后
        if ($.inArray(items, new_arr) == -1) {
            new_arr.push(items);
        }
    }
    return new_arr;
}

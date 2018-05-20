function setCookie(key,value,day) {//设置 cookies
    var str = key + "=" + value + ";"
    if(day){
        var date = new Date();
        date.setDate( date.getDate() + day);
        str += 'expires = ' + date;
    }
    document.cookie = str;
}
function getCookie(key) {//获取 Cookies 值
    var sCookie = document.cookie;//name=zhangsan; num=lisi;
    var arr = sCookie.split('; ');
    for(var i=0; i<arr.length; i++){
        var arr1 = arr[i].split("=");
        if(arr1[0] == key){
            return arr1[1];
        }
    }
}
function removeCookie(key) {//清除 Cookies
    setCookie(key,'',-1);
}

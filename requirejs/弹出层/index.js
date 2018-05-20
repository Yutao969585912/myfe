/**
 * Created by apple on 18/5/20.
 * **/
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});//require 中引入 jquery

require(['jquery','dialog'],function($,dialog) {
    $('#btn').on('click',function () {
        dialog.open({
            width:300,
            height:200,
            title:'登录',
            content:'text.html'
        });
        $('body').on('click','.confirm-btn',function(){
            dialog.close();
        })
    });
});
/**
 * Created by apple on 18/5/20.
 * **/
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});//require 中引入 jquery

/*
//第一版本
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
        });
    });
});
*/

/*
//第二版本
require(['jquery','dialog1'],function($,dialog) {
    $('#btn').on('click',function () {
        dialog.open({
            width:300,
            height:200,
            title:'登录',
            content:'text.html'
        });
        $('body').on('click','.confirm-btn',function(){
            //dialog.close();
            dialog.open({
                width:200,
                height:100,
                title:'请输入用户名：',
                content:'username.html'
            });
        });
    });
});*/
//第三版本
require(['jquery','dialog2'],function($,Dialog) {
    $('#btn').on('click',function () {
        var dialog1 = new Dialog({
            width:300,
            height:200,
            title:'登录',
            content:'text.html'
        });
        dialog1.open();
    });
    $('body').on('click','.confirm-btn',function(){
        var dialog2 = new Dialog({
            width:200,
            height:100,
            title:'请输入用户名：',
            content:'username.html'
        });
        dialog2.open();
    });
});
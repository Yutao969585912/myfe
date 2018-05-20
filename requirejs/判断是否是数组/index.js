/**
 * Created by apple on 18/5/20.
 * **/
require(['isArray'],function (isArray) {
    var arr = [123,56,15,23,55,];
    var str = 'sgsddsfg';
    var obj = {
        name:'sdgd',
        num:15,
    }
    //判断数组
    if(isArray(arr)){
        console.log(arr);
    }else {
        return '请输入数组。。。。'
    };
    //判断 String
    if(isArray(str)){
        console.log(str);
    }else{
        return console.log('请输入数组。。。。');
    }
     //判断 Object
    if(isArray(obj)){
        console.log(obj);
    }else {
        return console.log('请输入数组。。。。');
    };
})
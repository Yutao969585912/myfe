/**
 * Created by apple on 18/5/20.
 * **/
define(['isArray'],function(isArray){//先引用 isArray.js
    function sortArray(arr){
        if( isArray(arr)){
            arr.sort(function(x,y){
                return x-y; //从小到大排序
            });
            return arr;
        }
        return '请输入数组。。';
    }
    return sortArray;
});
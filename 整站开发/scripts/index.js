/**
 * Created by apple on 18/6/2.
 * **/

/**文本框得到失去焦点**/
$('.search').on('focus',function(){
    $(this).addClass('focus');
    if(this.value == this.defaultValue){
        this.value = '';
    };
}).on('blur',function(){
    $(this).removeClass('focus');
    if(this.value == ''){
        this.value = this.defaultValue;
    };
});

/****/
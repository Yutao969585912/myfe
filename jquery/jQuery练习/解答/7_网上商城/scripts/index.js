/**
 * Created by apple on 18/5/17.
 */

/* 搜索文本框效果 */
$('#inputSearch').on('focus',function () {
    $(this).addClass('focus');
    if(this.value == this.defaultValue){
        this.vaddClasslue = '';
    }
}).on('blur',function () {
    $(this).removeClass('focus');
    if(this.value == ''){
        this.value = this.defaultValue;
    }
});


/*导航栏换肤*/
$('#skin li').on('click',function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    $('#cssfile').attr('href','styles/skin/skin_'+$(this).index()+'.css');
    setCookie('MySkin',$(this).index(),10);
});
var mySkin = getCookie('MySkin');
$('#skin li').eq(mySkin).trigger('click');


/*导航效果*/
$(".nav li").hover(function(){
    $(this).find(".jnNav").show();
},function(){
    $(this).find(".jnNav").hide();
});


/*添加hot显示*/
$('.jnCatainfo .promoted').append('<a class="hot"></a>');
//.append()函数将特定内容插入到每个匹配元素里面的最后面，作为它的最后一个子元素


/*淡入淡出轮播图*/
var count = 0;
var timer;
$('.btn-box a').on('mouseover',function () {
    chenge($(this).index());
    count = $(this).index();
});
run();
$('#jnImageroll').on('mouseover',function () {
    clearInterval(timer);
}).on('mouseout',function () {
    run();
})
function chenge(idex) {
    $('.btn-box a').eq(idex).addClass('chos').siblings().removeClass('chos');
    $('#JS_imgWrap img').eq(idex).fadeIn(700).siblings().stop().fadeOut(700);
}
function run() {
    timer = setInterval(function () {
        count++;
        if(count == $('#JS_imgWrap img').length){
            count = 0;
        }
        chenge(count);
    },3000);
}


/*最新动态 超链接文字提示*/
var $title = '';
$('#jnNoticeInfo li a').on('mouseover',function(e){
    //$title = $(this).attr('title');
    this.myTitle = $(this).attr('title');
    $('<div class="tip">'+this.myTitle+'</div>').appendTo('body').offset({
        left:e.pageX +20,
        top:e.pageY+20
    });
    $(this).attr('title','');
}).on('mousemove',function(e){
    $('.tip').offset({
        left:e.pageX +20,
        top:e.pageY+20
    });
}).on('mouseout',function(){
    $('.tip').remove();
    //$(this).attr('title',$title);
    $(this).attr('title',this.myTitle);

});


/*品牌活动模块横向滚动*/
$('#jnBrandTab li').on('click',function () {
    $(this).addClass('chos').siblings().removeClass('chos');
    var indx = $("#jnBrandTab li").index(this);
    show(indx);
    return false;
}).eq(0).click();
//显示图片
function show(index){
    var $list = $("#jnBrandList"); //jquery 对象转 原生 js 对象
    var newWidth = $list.find("li").outerWidth();//取单个图片宽度
    newWidth = newWidth * 4; //一个版面的宽度
    $list.stop(true,false).animate({ left : -newWidth*index},1000);
}






















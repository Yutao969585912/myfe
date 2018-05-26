/**
 * Created by apple on 18/5/26.
 * **/
require(['Carousel'],function(Carousel) {
    var carousel1 = new Carousel();
    carousel1.init({
        selector:'#content1',//插入位置
        imgData:['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg'],//图片
        arrowPosition:'center',//箭头位置 center中心   bottom底部
        buttonType:'round'//按钮类型 round 圆   square 方
    });

    var carousel2 = new Carousel();
    carousel2.init({
        selector:'#content2',//插入位置
        imgData:['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg'],//图片
        arrowPosition:'bottom',//箭头位置 center中心   bottom底部
        buttonType:'square',//按钮类型 round 圆   square 方
        speed:'1000'//自动轮播时间间隔
    });
});






























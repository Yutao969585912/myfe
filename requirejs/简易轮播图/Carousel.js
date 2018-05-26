/**
 * Created by apple on 18/5/26.
 * **/
requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4'
    }
});//define 中引入 jquery

define(['jquery'],function($) {
    function Carousel() {
        this.$container = $('<div class="container"></div>');
        this.$imgBox = $('<div class="img-box"></div>');
        this.$tab = $('<ul class="tab"></ul>');
        this.$prev = $('<span class="prev">&lt;</span>');
        this.$next = $('<span class="next">&gt;</span>');
        this.iNow = 0;
        this.default = {//未传参时显示默认样式
            arrowPosition:'center',//箭头位置 center中心   bottom底部
            buttonType:'round',//按钮类型 round 圆   square方
            speed:'2000'//自动轮播时间间隔
        };
    };
    Carousel.prototype.init = function(option){
        var _this = this;//定义一个变量在当前对象改变前，储存当前对象，改变后不受影响
        //创建样式
        $.extend(this.default,option);//jQuery.extend() 函数用于将一个或多个对象的内容合并到目标对象（覆盖目标对象）

        this.$container.append(this.$imgBox).append(this.$tab).append(this.$prev).append(this.$next);
        for(var i=0; i<this.default.imgData.length; i++){
            var cla = (i==0)?' selected':'';
            this.$imgBox.append($('<img class="'+ cla+ '" src="'+this.default.imgData[i]+'" alt="">'));
            this.$tab.append($('<li class="'+this.default.buttonType+cla+'">'+(i+1)+'</li>'));
        };
        this.$prev.addClass('prev-'+this.default.arrowPosition);//增加样式
        this.$next.addClass('next-'+this.default.arrowPosition);
        //this.$prev.attr('class','prev-'+this.default.arrowPosition);//覆盖原来样式
        $(this.default.selector).append(this.$container);

        //增加效果
        $('li',this.$tab).on('click',function(){//给 this.$tab 下的 li 绑定事件
            _this.iNow = $(this).index();
            changeImg(_this.iNow);

        });

        function changeImg(index) {
            $('li',_this.$tab).eq(index).addClass('selected').siblings().removeClass('selected');
            $('img',_this.$imgBox).eq(index).addClass('selected').siblings().removeClass('selected');
        };

        this.$prev.on('click',function(){
            _this.iNow--;
            if(_this.iNow == -1){
                _this.iNow = _this.default.imgData.length-1;
            }
            changeImg(_this.iNow);
        });

        this.$next.on('click',function(){
            _this.iNow++;
            if(_this.iNow == _this.default.imgData.length){
                _this.iNow = 0;
            }
            changeImg(_this.iNow);
        });

        run();

        this.$container.hover(function () {
            clearInterval(_this.timer);
        },function () {
            run();
        });

        function run(){
            _this.timer = setInterval(function () {
                _this.$next.trigger('click');
            },_this.default.speed);
        };
    };
    return Carousel;
});

































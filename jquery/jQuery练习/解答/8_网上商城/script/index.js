/**
 * Created by apple on 18/5/13.
 */
var count = 0;
var timer ;
$('.btn-box a').on('mouseover',function(){
    change($(this).index());
    count = $(this).index();
});
run();

$('#jnImageroll').on('mouseover',function(){
    clearInterval(timer);
}).on('mouseout',function(){
   run();
});
function run(){
    timer = setInterval(function(){
        count++;
        if(count == $('#JS_imgWrap img').length){
            count = 0;
        }
        change(count);

    },2000);
}
function change(idx){
    $('.btn-box a').eq(idx).addClass('chos').siblings().removeClass('chos');
    $('#JS_imgWrap img').eq(idx).stop().fadeIn(600).siblings().stop().fadeOut(600);
}



/*最新动态开始*/
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




/*最新动态结束*/





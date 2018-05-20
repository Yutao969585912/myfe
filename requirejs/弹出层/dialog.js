/**
 * Created by apple on 18/5/20.
 * **/
define(function(){
   var dialog = {
       open:function(obj){
           var html = '<div class="dialog-mask">' +
                            '<div class="dialog-box">' +
                                '<div class="dialog-title">' +
                                    '<h2>我是标题</h2>' +
                                    '<span class="dialog-close">X</span>' +
                                '</div>' +
                                '<div class="dialog-content">哈哈哈</div>' +
                            '</div>' +
                        '</div>';
           $('body').append(html);
           $('.dialog-box').css({
               width:obj.width,
               height:obj.height,
           });
           $('.dialog-title h2').html(obj.title);
           $('.dialog-content').load(obj.content);
           $('.dialog-close').on('click',function(){
               $('.dialog-mask').remove();
           })
       },
       close:function(){
           $('.dialog-mask').remove();
       }
   };
   return dialog;
});
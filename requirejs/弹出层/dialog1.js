/**
 * Created by apple on 18/5/23.
 * **/
define(function(){
    var dialog = {
        open:function(obj){
            var _this = this;//定义一个变量在当前对象改变前，储存当前对象，改变后不受影响
            this.$dialogMask = $('<div class="dialog-mask"></div>');
            this.$dialogBox = $('<div class="dialog-box"></div>').css({
                width:obj.width,
                height:obj.height
            });
            this.$dialogTitle = $('<div class="dialog-title"></div>');
            this.$dialogContent = $('<div class="dialog-content"></div>').load(obj.content);
            this.$dialogH2 = $('<h2>我是标题</h2>').html(obj.title);
            this.$dialogClose = $('<span class="dialog-close">X</span>').on('click',function(){
                _this.$dialogMask.remove();
                //_this.close();
            });

            this.$dialogMask.append(this.$dialogBox);
            this.$dialogBox.append(this.$dialogTitle).append(this.$dialogContent);
            this.$dialogTitle.append(this.$dialogH2).append(this.$dialogClose);
            $('body').append(this.$dialogMask);
        },
        close:function(){
            this.$dialogMask.remove();
        }
    };
    return dialog;
});
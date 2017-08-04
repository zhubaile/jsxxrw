/**
 * Created by lenovo on 2017/8/4.
 */
$(function(){
    var $bird=$("#dbird");
    var pos=$bird.offset();
    var birdsize={width:$bird.width(),height:$bird.height()};
    var speed=10;
    var keyrecord=39;
    $(document).keydown(function(even){
       var key=even.keyCode;
        if(key!=keyrecord)
        {
            $bird.removeClass().addClass("dir_"+key);
        }
        keyrecord=key;
        switch (key)
        {
            case 37:
            pos.left-=speed;
            if(pos.left<=-birdsize.width)
            {
                pos.left=$(window).width();
            }
            break;
            case 38:
                pos.top-=speed;
                if(pos.top<=-birdsize.height)
                {
                    pos.top=$(window).height();
                }
                break;
            case 39:
                pos.left+=speed;
                if(pos.left>=$(window).width())
                {
                    pos.left=-birdsize.width;
                }
                break;
            case 40:
                pos.top+=speed;
                if(pos.top>=$(window).height())
                {
                    pos.top=-birdsize.height;
                }
                break;
        }
        $bird.offset(pos);
    });
});

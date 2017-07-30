/**
 * Created by lenovo on 2017/7/30.
 */
/*
var i=0;
var timer;
$(function(){
    $(".one").eq(0).show().siblings().hide();
     lbxg();
    $(".shuzi").hover(function(){
        i=$(this).index();
        show();
        clearInterval(timer);
    },function(){
        show();
        lbxg();
    });
    $(".zou").eq(i).click(function(){
        clearInterval(timer);
        if(i==0){
            i=8;
        }
        i--;
        show();
        lbxg();
    });
    $(".you").eq(i).click(function(){
        clearInterval(timer);
        if(i==7){
            i=-1;
        }
        i++;
        show();
        lbxg();
    });
});

function show(){
    $(".lbtp").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".shuzi").eq(i).addClass("only").siblings().removeClass("only");
}
function lbxg(){
    timer=setInterval(function(){
        i++;
        if(i==8){
            i=0
        }
        show();
    },2000);
}*/

$(function(){
    var $bird=$("#dbird");
    var pos=$bird.offset();//小鸟方位
    var birdSize={width:$bird.width(),height:$bird.height()};
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
                if(pos.left<=-birdSize.width){
                    pos.left=$(window).width();
                }
                break;
            case 38:
                pos.top-=speed;
                if(pos.top<=-birdSize.height){
                    pos.top=$(window).height();
                }
                break;
            case 39:
                pos.left+=speed;
                if(pos.left>=$(window).width()){
                    pos.left=-birdSize.width;
                }
                break;
            case 40:
                pos.top+=speed;
                if(pos.top>=$(window).height()){
                    pos.top=-birdSize.height;
                }
                break;
        }
        $bird.offset(pos);
    });
});

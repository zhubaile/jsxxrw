/**
 * Created by lenovo on 2017/7/29.
 */
/*
var i=0;
var timer;
$(function(){
    $(".one").eq(0).show().siblings().hide();
     Showtimer();
    $(".shuzi").hover(function(){
        i=$(this).index();
        show();
        clearInterval(timer);
    },function(){
          show();
        Showtimer();
    });
    $(".zou").eq(i).click(function(){
        clearInterval(timer);
        if(i==0){
            i=8;
        }
        i--;
        show();
        Showtimer();
    });
    $(".you").eq(i).click(function(){
        clearInterval(timer);
        if(i==7){
            i=-1;
        }
        i++;
        show();
        Showtimer();
    });
});
function show(){
    $(".lbtp").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".shuzi").eq(i).addClass("only").siblings().removeClass("only");
}
function Showtimer(){
    timer=setInterval(function(){
        i++;
        if(i==8){
            i=0;
        }
        show();
    },2000);
}*/

$(function(){
    var $bird=$("#dbird");//找到小鸟的对象
    var pos=$bird.offset();//获取到小鸟的方位
    var birdSize={width:$bird.width(),height:$bird.height()};
    var speed=10;//设置小鸟移动速度
    var keyrecord=39;
    $(document).keydown(function(even){
        var key=even.keyCode;//得到键盘事件
        if(key!=keyrecord){
            $bird.removeClass().addClass("dir_"+key);
        }
        keyrecord=key;
        switch (key)
        {
            case 37://左
                pos.left-=speed;
                if(pos.left<=-birdSize.width)
                {
                    pos.left=$ (window).width();
                }
                break;
            case 38://上
                pos.top-=speed;
                if(pos.top<=-birdSize.height){
                    pos.top=$(window).height();
                }
                break;
            case 39://右
                pos.left+=speed;
                if(pos.left>=$(window).width()){
                    pos.left=-birdSize.width;
                }
                break;
            case 40://下
                pos.top+=speed;
                if(pos.top>=$(window).height()){
                    pos.top=-birdSize.height;
                }
                break;
        }
        $bird.offset(pos);
    });
});

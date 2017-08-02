/**
 * Created by lenovo on 2017/8/2.
 */
var i=0;
var timer;
$(function(){
   $(".first").eq(0).show().siblings().hide();
    Showtime();
    $(".shuzi").hover(function(){
        i=$(this).index();
       show();
        clearInterval(timer);
    },function(){
       Showtime();
    });
    $(".zuo").eq(i).click(function(){
        clearInterval(timer);
        if(i==0){
            i=8;
        }
        i--;
        show();
        Showtime();
    });
    $(".you").eq(i).click(function(){
        clearInterval(timer);
        if(i==7){
            i=-1;
        }
        i++;
        show();
        Showtime();
    });
});

function show(){
    $(".lbtp").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".shuzi").eq(i).addClass("one").siblings().removeClass("one");
}
function Showtime(){
    timer=setInterval(function(){
        i++;
        if(i==8){
            i=0;
        }
        show();
    },2000);
}
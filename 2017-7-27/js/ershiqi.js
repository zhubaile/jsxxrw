/**
 * Created by lenovo on 2017/7/27.
 */
var i=0;
var timer;
$(function(){
   $(".one").eq(0).show().siblings().hide();
     Timers();
    $(".shuzi").hover(function(){
        i=$(this).index();
        show();
        clearInterval(timer);
    },function(){
        Timers();
    });
    $(".zou").eq(i).click(function(){
        clearInterval(timer);
        if(i==0){
            i=8;
        }
        i--;
        show();
        Timers();
    });
    $(".you").eq(i).click(function(){
        clearInterval(timer);
        if(i==7){
            i=-1;
        }
        i++;
        show();
        Timers();
    });
});
function show(){
    $(".lbtp").eq(i).fadeIn(300).siblings().fadeOut(300);
    $(".shuzi").eq(i).addClass("nub").siblings().removeClass("nub");
}
function Timers(){
    timer=setInterval(function(){
        i++;
        if(i==8){
            i=0;
        }
        show();
    },4000);
}
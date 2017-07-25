/**
 * Created by lenovo on 2017/7/25.
 */
var i=0;
var timer;
$(function(){
    //$(".nav").hover(function(){$(".but").show();},function(){$(".but").hide();});
    $(".nav-lbhs").eq(0).show().siblings().hide();
    ShowTime();
    $(".shuzi").hover(function(){
       i=$(this).index();
        show();
        clearInterval(timer);//清除轮播
    },function(){
    ShowTime();
    });
    $(".zou").click(function(){
       clearInterval(timer);
        if(i==0){
            i=7;
        }
        i--;
        show();
        ShowTime();
    });
    $(".you").click(function(){
        clearInterval(timer);
        if(i==6){
            i=-1;
        }
        i++;
        show();
        ShowTime();
    });
});
function show(){
    $(".nav-lbhs").eq(i).fadeIn(400).siblings().fadeOut(400);
    $(".shuzi").eq(i).addClass("one").siblings().removeClass("one");
}
function ShowTime(){
    timer=setInterval(function(){
        i++;
        if(i==7){
            i=0;
        }
        show();
    },4000);
}
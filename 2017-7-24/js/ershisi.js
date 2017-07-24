/**
 * Created by lenovo on 2017/7/24.
 */

var i=0;
var timer;
$ (function(){
   $(".xg").eq(0).show().siblings().hide();
    ShowTime();
    $(".tab").hover(function(){
        i=$(this).index();
        show();
        clearInterval(timer);//Çå³ýÂÖ²¥
    },function(){
        ShowTime();
    });
    $(".one").click(function(){
        clearInterval(timer);
        if(i==0){
            i=7;
        }
        i--;
        show();
        ShowTime();
    });
    $(".two").click(function(){
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
     $(".xg").eq(i).fadeIn(400).siblings().fadeOut(400);
     $(".tab").eq(i).addClass("bg").siblings().removeClass("bg")
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
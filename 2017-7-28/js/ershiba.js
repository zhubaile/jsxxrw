/**
 * Created by lenovo on 2017/7/28.
 */
/*
function MyClick(){
    var arr=[10,25,7,98,64,21,11,33];
    var isum=0;
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                isum=arr[i];
                arr[i]=arr[j];
                arr[j]=isum;
            }
        }
    }
    alert(arr);
}*/
/*
function MyClick(){
    var arr=[10,25,7,98,64,21,11,33];
    for(var i=0;i<arr.length;i++){
        arr[i]++;
    }
    alert(arr);
}
*/
/*function MyClick(){
var isum=0;
    for(var i=0;i<101;i++){
        isum+=i;
    }
    alert(isum);
}*/
/*function MyClick(){
    var i=0;
    var timer=setInterval(function(){
       i++;
        if(i==6){
            clearInterval(timer);
        }
        document.getElementById("dh").innerText=i;
    },1000);
}*/
/*
function MyClick(){
    var i=0;
setInterval(function(){
        i++;
        document.getElementById("dh").innerText=i;
    },1000);
}*/


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
    $(".shuzi").eq(i).addClass("nub").siblings().removeClass("nub");
}
function Showtimer(){
    timer=setInterval(function(){
        i++;
        if(i==7){
            i=0;
        }
        show();
    },2000);
}
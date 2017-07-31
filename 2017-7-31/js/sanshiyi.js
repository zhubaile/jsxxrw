/**
 * Created by lenovo on 2017/7/31.
 */
$(function(){
    $(".top ul li").mouseover(function(){
       $(this).stop(true).animate({width:"500px"},1000).siblings().stop(true).animate({width:"100px"},1000);
    });
});
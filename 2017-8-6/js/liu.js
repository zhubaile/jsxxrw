/**
 * Created by lenovo on 2017/8/6.
 */
$(function(){
    $(".last-two").hide();
    $(".last-one>a").toggle(function(){
        $(this).next().slideDown();
    },function(){
        $(this).next().slideUp();
    });
});

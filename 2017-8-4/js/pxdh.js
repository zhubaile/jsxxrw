/**
 * Created by lenovo on 2017/8/4.
 */
var minsize=5;
var maxsize=50;
var nuwon=200;
var flakecolor="white";
var flake=$("<div></div>").css({"position":"absolute","top":"-50px"}).html("❄");
$(function(){
   var documenthieght=$(document).height();
    var documentwidth=$(document).width();
    setInterval(function(){
        var startpositionleft=Math.random()*documentwidth;
        var startopacity=0.7+Math.random()*0.3;
        var endpositiontop=documenthieght;
        var endpositionleft=Math.random()*documentwidth;
        var durationfall=4000+Math.random()*3000;
        var sizeflake=minsize+Math.random()*maxsize;
        flake.clone().appendTo("body").css({
           "left": startpositionleft,
            "opacity":startopacity,
            "font-size":sizeflake,
            "color":flakecolor
        }).animate({
           "top": endpositiontop,
            "left":endpositionleft,
            "opacity":0.5
        },durationfall,function(){$(this).remove();});
    },nuwon);
});
/**
 * Created by lenovo on 2017/8/5.
 */
/*var minsize=5;
var maxsize=50;
var nowon=200;
var flakecolor="white";
var flake=$("<div></div>").css({"position":"absolute","top":"-50px"}).html("❄");
$(function(){
    var documentwidth=$(document).width();
    var documentheight=$(document).height();
    setInterval(function(){
        var startpositionleft=Math.random()*documentwidth;
        var statopicaty=0.7+Math.random()*0.3;
        var endpositionleft=Math.random()*documentwidth;
        var endpositiontop=documentheight;
        var sizeflake=minsize+Math.random()*maxsize;
        var durationfall=4000+Math.random()*3000;
        flake.clone().appendTo("body").css({
          "left": startpositionleft,
            "opacity": statopicaty,
            "color":flakecolor,
            "font-size":sizeflake
        }).animate({
            "left":endpositionleft,
            "top":endpositiontop,
            "opacity":0.5
        },durationfall,function(){$(this).remove();});
    },nowon);
});*/
var inum1;
var inum2;
var sheng=["河北省","山西省","河南省"];
var shi=[["石家庄市","张家口市","承德市","秦皇岛市"],["太原市","朔州市","大同市","阳泉市"],["郑州市","安阳市","鹤壁市","新乡市"]];
var xian=[[["无极县","赵县","黎城县"],["沽源县","尚义县","阳原县"],["平泉县","栾庆县","隆化县"],["安定县","小康县","微笑县"]],
[["这个线","哪个县","你好闲"],["无极县","赵县","黎城县"],["无极县","赵县","黎城县"],["无极县","赵县","黎城县"]],
[["郑东新区","龙子湖","金水"],["无极县","赵县","黎城县"],["无极县","赵县","黎城县"],["无极县","杞县","浚县"]]];
$(function(){
    for(var i=0;i<sheng.length;i++){
        $("#selsheng").append("<option>"+ sheng[i]+"</option>")
    }
    $("#selsheng").change(function(){
        $("#selshi").children().not(":eq(0)").remove();
        $("#selxian").children().not(":eq(0)").remove();
        inum1=$(this).children("option:selected").index();
        var ashi=shi[inum1-1];
        for(var j=0;j<ashi.length;j++){
            $("#selshi").append("<option>"+ashi[j]+"</option>")
        }
    });
   $("#selshi").change(function(){
     $("#selxian").children().not(":eq(0)").remove();
       inum2=$(this).children("option:selected").index();
       var axian=xian[inum1-1][inum2-1];
       for(var z=0;z<axian.length;z++){
           $("#selxian").append("<option>"+axian[z]+"</optiom>")
       }
   });
});
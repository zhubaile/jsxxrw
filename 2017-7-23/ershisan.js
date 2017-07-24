/**
 * Created by lenovo on 2017/7/23.
 */

function MyClick (){
/* var arr=[10,26,89,54,12,8,97,4];
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
    alert(arr);*/

/*    var arr=[10,26,89,54,12,8,97,4];
    for(var i=0;i<arr.length;i++){
        arr[i]++;//arr[i]=arr[i]+5;自增5
    }
    alert(arr);*/

/*    var isum=0;
    for(var i=0;i<101;i++){
        isum+=i;
    }
    alert(isum);*/

/*    $(".es").click(function(){
     alert("aaa")
     });*/

}
$ (function(){
    /*$("p:odd").css("color","red");//偶数行执行（必须是p标签）
    $("p:even").css("color","blue");//奇数行执行*/
/*    $("p:first").css("color","red");//第一个p标签
    $("p:last").css("color","blue");//最后一个p标签*/
/*    $("p:first-child").css("color","red");//父元素下是第一个p标签
    $("p:last-child").css("color","blue");//父元素下最后一个p标签*/
   //$("p:nth-child(2)").css("color","red");//这个可以查找，2就是父元素第二个p元素（第二个标签就是p标签才行）
    $("p:nth-of-type(1)").css("color","red");//指的父元素里第一个p元素（不一定第一个标签是p标签）
});
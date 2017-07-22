/**
 * Created by lenovo on 2017/7/22.
 */
/*function MyClick(){
    var isum=0;
    for(var i=0;i<101;i++){
        if(i==5){
            //break;//当i=5的时候导出
            //continue;//当i=5的时候跳过该运算
            return;
        }
        isum+=i
    }
    alert(isum);
}*/


/*function MyClick(){
 var i=0;
 setInterval(function(){
 i++;
 document.getElementById("hz").innerText=i;
 },1000);
 }*///一直重复加一，无限不停止！


/*function MyClick(){
 var i=0;
 setTimeout(function(){
 i++;
 document.getElementById("hz").innerText=i;
 },1000);
 }//就加一，不加了，加一个就停止了；*/


function MyClick(){
 var i=0;
 var timer=setInterval(function(){
 i++;
     if(i==6){
         clearInterval(timer);
     }
 document.getElementById("hz").innerText=i;
 },1000);
 }//加到6就会停止
/**
 * Created by lenovo on 2017/7/20.
 */
function MyClick(){
    var sinput=prompt("请输入一个1-7之间的整数");
    try{
    if(sinput==parseInt(sinput)){
        if(parseInt(sinput)>7||parseInt(sinput)<1)
        {
            alert("这不是1-7之间的整数");
        }
        else{
            switch (parseInt(sinput))
            {
                case 1:
                    alert("星期一");
                    break;
                case 2:
                    alert("星期二");
                    break;
                case 3:
                    alert("星期三");
                    break;
                case 4:
                    alert("星期四");
                    break;
                case 5:
                    alert("星期五");
                    break;
                case 6:
                    alert("星期六");
                    break;
                case 7:
                    alert("星期日");
                    break;
            }
        }

    }
    else{
        alert("输入的不是一个整数");
    }
    }
    catch(e)
    {
        alert("输入的不是一个整数");
    }
}
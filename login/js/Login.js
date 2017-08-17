/**
 * Created by lenovo on 2017/8/9.
 */
$(function(){
    var $userName=$("#userName");
    $("#loginSubmit").on("click",function(){
        var userNameVal=$userName.val();
        debugger;
        //验证输入用户名内容是否为邮箱格式
        if(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(userNameVal)){
            alert("提交成功")
        }else{
            $userName.siblings("span").closest(".box-row").addClass("error")
        }
    })
});

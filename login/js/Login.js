/**
 * Created by lenovo on 2017/8/9.
 */
function login()
{
    var name= $.trim($("#username").val());
    var pwd= $.trim($("#userpwd").val());
    if(name==""||pwd==""){
        alert("用户名或密码不正确")
    }
}

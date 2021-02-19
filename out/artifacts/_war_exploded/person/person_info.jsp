<%--
  Created by IntelliJ IDEA.
  User: 14371
  Date: 2020/12/16
  Time: 15:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html>
<head>
    <title>电影后台管理系统</title>
    <meta name="apple-mobile-web-app-title" content="Amaze UI" />
    <link rel="icon" type="image/png" href="../assets/i/favicon.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/i/app-icon72x72@2x.png">
    <link rel="stylesheet" href="../assets/css/amazeui.min.css" />
    <link rel="stylesheet" href="../assets/css/admin.css">
    <link rel="stylesheet" href="../assets/css/app.css">
    <link rel="stylesheet" href="../assets/css/frame.css">
    <script type="text/javascript" src="../jquery-3.4.1.js"></script>

    <script type="text/javascript">
        function s1(){
                var usernameValue = $("#username").val();
                // 验证用户名是否合法,规则如下：必须由字母，数字，下划线组成，并且长度为5到15位。
                var usernameReg = /^\w{5,15}$/;
                // 验证用户信息
                if (!usernameReg.test(usernameValue)) {
                    // 提示用户
                    $(".errorMsg2").text("用户名不合法！");

                    $("#username").val("");
                    return false;
                }

                // 获取
                var emailValue = $("#email").val();
                // 验证邮件输入是否合法。
                var emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

                if (!emailReg.test(emailValue)) {
                    // 提示用户
                    $(".errorMsg2").text("邮件输入不合法！");
                    $("#email").val("")
                    return false;
                }
               $("#f1").submit();
        }
    </script>
    <script type="text/javascript">

        $( function() {
            var choose = function(id) {
                return document.getElementById(id);
            }
            //自定柳部分
            window.confirm = function(message, yesCallBack, noCallBack) {

                var message = message || "确定?";

                choose("dialog-message").innerHTML = message;
                // 显示遮罩和对话框
                choose("dialog-hide").className = "wrap-dialog";
                // 确定按钮

                choose("dialog").onclick = function(e) {
                    if (e.target.className == "dialog-btn") {
                        choose("dialog-hide").className = "wrap-dialog dialog-hide";
                        yesCallBack();
                    } else if (e.target.className == "dialog-btn dialog-ml50") {
                        choose("dialog-hide").className = "wrap-dialog dialog-hide";
                        noCallBack();
                    }
                };
                // 取消按钮
                choose("closeBtn").onclick = function() {
                    choose("dialog-hide").style.display = "none";
                }
            }
        })
        function submitHand() {
            function submitBtn() {
                s1();
            }

            function closeBtn() {
                window.history.go(0);
            }
            confirm("确定要修改个人信息吗？", submitBtn, closeBtn);
        }
    </script>

</head>
<body >
<div class="wrap-dialog dialog-hide" id="dialog-hide">
    <div class="dialog" id="dialog">
        <a class="closeBtn" id="closeBtn">X</a>
        <div class="dialog-header">
            <span class="dialog-title">提示</span>
        </div>
        <div class="dialog-body">
            <span class="dialog-message" id="dialog-message">确定要修改个人信息吗？</span>
        </div>
        <div class="dialog-footer">
            <input type="button" class="dialog-btn" id="dialog-confirm" value="确定">
            <input type="button" class="dialog-btn dialog-ml50" id="dialog-cancel" value="取消">
        </div>
    </div>
</div>
<%@include file="../top.jsp"%>

<div class="tpl-page-container tpl-page-header-fixed">
    <!--左边start-->
    <%@include file="../sidebar.jsp"%>
    <!--左边end-->
    <div class="tpl-content-wrapper">
        <!--右边内容start-->
        <ol class="am-breadcrumb">
            <li>
                <a href="#" class="am-icon-home">首页</a>
            </li>
            <li class="am-active">
                个人信息修改
            </li>
        </ol>
        <div class="tpl-portlet-components">
            <div class="tpl-block">
                <!-- 详情开始 -->
                <div class="am-g tpl-amazeui-form">
                    <div class="am-u-sm-12 am-u-md-9">
                        <br> <br> <br>
                        <form class="am-form am-form-horizontal"  id="f1" action="${pageContext.request.contextPath}/upUser" method="post" >
                            <input type="hidden" name="id" value="${sessionScope.user.id}"/>
                            <div class="am-form-group">
                                <label  class="am-u-sm-3 am-form-label">用户名</label>
                                <div class="am-u-sm-9">
                                    <input type="text" id="username" name="username" value="${sessionScope.user.username}"/>
                                </div>
                            </div>
<%--                            <input type="hidden" name="paw" value="${user.paw}">--%>
                            <div class="am-form-group">
                                <label  class="am-u-sm-3 am-form-label">手机号</label>
                                <div class="am-u-sm-9">
                                    <input type="text" id="tele" name="tele" value="${sessionScope.user.tele}"/>
                                </div>
                            </div>
                            <div class="am-form-group">
                                <label  class="am-u-sm-3 am-form-label" >邮箱</label>
                                <div class="am-u-sm-9">
                                    <input type="text" id="email" name="email" value="${sessionScope.user.email}"/>
                                </div>
                            </div>

                            <div class="am-form-group">
                                <div class="am-u-sm-9 am-u-sm-push-3">
                                    <label>
                                        <%--											<span ><font style="font-size: 17px;color: red;">111</font></span>--%>
                                        <span class="errorMsg2" style="font-size: 17px;color: red"><%=request.getAttribute("mgs4")==null?"":request.getAttribute("mgs4")%></span>
                                    </label>
                                    <br>
                                    <br>
                                    <button type="button" class="am-btn am-btn-primary"  onclick="submitHand()">保存修改</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- 详情结束 -->
            </div>
            <div class="tpl-alert"></div>
        </div>
    </div>
    <!--右边内容end-->
</div>

</body>
</html>

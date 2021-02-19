<%--
  Created by IntelliJ IDEA.
  User: 14371
  Date: 2020/12/15
  Time: 14:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <title>HTML注册登录页面模板</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
<div class="content">
    <div class="form sign-in">
        <h2>欢迎回来</h2>
        <label>
            <span>邮箱</span>
            <input type="email" />
        </label>
        <label>
            <span>密码</span>
            <input type="password" />
        </label>
        <p class="forgot-pass"><a href="javascript:">忘记密码？</a></p>
        <button type="button" class="submit">登 录</button>
        <button type="button" class="fb-btn">使用 <span>facebook</span> 帐号登录</button>
    </div>
    <div class="sub-cont">
        <div class="img">
            <div class="img__text m--up">
                <h2>还未注册？</h2>
                <p>立即注册，发现大量机会！</p>
            </div>
            <div class="img__text m--in">
                <h2>已有帐号？</h2>
                <p>有帐号就登录吧，好久不见了！</p>
            </div>
            <div class="img__btn">
                <span class="m--up">注 册</span>
                <span class="m--in">登 录</span>
            </div>
        </div>
        <div class="form sign-up">
            <h2>立即注册</h2>
            <label>
                <span>用户名</span>
                <input type="text" />
            </label>
            <label>
                <span>邮箱</span>
                <input type="email" />
            </label>
            <label>
                <span>密码</span>
                <input type="password" />
            </label>
            <button type="button" class="submit">注 册</button>
            <button type="button" class="fb-btn">使用 <span>facebook</span> 帐号注册</button>
        </div>
    </div>
</div>

<script src="js/script.js"></script>

<div style="text-align:center;">
    <p>更多模板：<a href="http://www.mycodes.net/" target="_blank">源码之家</a></p>
</div>
</body>

</html>
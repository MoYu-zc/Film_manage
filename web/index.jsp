<%--
  Created by IntelliJ IDEA.
  User: 14371
  Date: 2020/12/13
  Time: 23:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>

 <title>电影后台管理系统</title>
    <link rel="icon" type="image/png"
          href="assets/i/favicon.png">
    <link rel="apple-touch-icon-precomposed"
          href="assets/i/app-icon72x72@2x.png">
<link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript"  src="jquery-3.4.1.js"></script>
    <style>
        @charset "UTF-8";
        *, *:before, *:after {
            box-sizing: border-box;
        }

        body {
            padding: 0;
            margin: 0;
            overflow: hidden;
            font-family: 'Roboto', sans-serif;
        }

        canvas {
            width: 100vw;
            height: 100vh;
        }

        h1 {
            position: absolute;
            z-index: 1;
            width: 100%;
            left: 0;
            top: 50%;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            mix-blend-mode: overlay;
            color: rgba(0, 0, 0, 0.3);
            line-height: 0;
            font-size: 16px;
            letter-spacing: 4px;
            text-align: center;
            text-transform: uppercase;
            transform: translateY(-50%);
            cursor: pointer;
            -webkit-transition: color .2s ease-in-out;
            transition: color .2s ease-in-out;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        h1:hover {
            color: rgba(0, 0, 0, 0.8);
        }
    </style>

    <script type="text/javascript">
$(function () {
    $("#codeImg").click(function(){
        var url= "code.jpg?t="+Math.random();
        $(this).prop("src",url);
    });
});


  function s1(){
    // 获取用户名
    var usernameValue = $("#username").val();
    // 验证用户名是否合法,规则如下：必须由字母，数字，下划线组成，并且长度为5到15位。
    var usernameReg = /^\w{5,15}$/;
    // 验证用户信息
    if (!usernameReg.test(usernameValue)) {
    // 提示用户
    $(".errorMsg").text("用户名不合法！");

    $("#username").val("");
    // 获取密码
    var passwordValue = $("#password").val();
      return false;
  }
    // 验证密码是否合法,规则如下：必须由字母，数字，下划线组成，并且长度为5到15位。
    var passwordReg = /^\w{5,15}$/;
    // 验证用户信息
    if (!passwordReg.test(passwordValue)) {
    // 提示用户
    $(".errorMsg").text("密码不合法！");
    $("#password").val("");
    return false;
    }
    // 获取验证码信息
    var codeValue = $("#code").val();
    // 验证验证码不为空！
    if (codeValue == "") {
    $(".errorMsg").text("验证码不能为空！");
        return false;
    }
    // var action = "Login/"+usernameValue+"/"+passwordValue;
    // $("#f1").attr("action",action);
      $("#f1").submit();
    }
   function s2(){
        // 获取用户名
        var usernameValue1 = $("#username1").val();
        // 验证用户名是否合法,规则如下：必须由字母，数字，下划线组成，并且长度为5到15位。
        var usernameReg1 = /^\w{5,15}$/;
        // 验证用户信息
        if (!usernameReg1.test(usernameValue1)) {
            // 提示用户
            $(".errorMsg1").text("用户名不合法！");
            $("#username1").val("");
            return false;
        }
        // 获取密码
        var passwordValue1 = $("#password1").val();
        // 验证密码是否合法,规则如下：必须由字母，数字，下划线组成，并且长度为5到15位。
        var passwordReg1 = /^\w{5,15}$/;
        // 验证用户信息
        if (!passwordReg1.test(passwordValue1)) {
            // 提示用户
            $(".errorMsg1").text("密码不合法！");
            $("#password1").val("");
            return false;
        }

        //获取确认密码
        var repwdValue1 = $("#repwd").val();
        // 验证确认密码和密码一致
        if (passwordValue1 != repwdValue1) {
            // 提示用户

            $(".errorMsg1").text("确认密码和密码不一致！");
            $("#password1").val("");
            $("#repwd").val("");
            return false;
        }
        // 获取用户名
        var emailValue = $("#email").val();
        // 验证邮件输入是否合法。
        var emailReg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

        if (!emailReg.test(emailValue)) {
            // 提示用户
            $(".errorMsg1").text("邮件输入不合法！");
            $("#email").val("")
            return false;
        }
       $("#f2").submit();
    }
    </script>

</head>

<body>

<script src="js/chroma.min.js"></script>
<script src="js/dat.gui.min.js"></script>

<canvas id="canvas"></canvas>

<h1>The Floor is Lava</h1>

<script>
    'use strict';

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var settings = {
        amplitudeX: 150,
        amplitudeY: 20,
        lines: 30,
        startColor: '#500c44',
        endColor: '#b4d455'
    };

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var Paths = [];
    var color = [];
    var mouseY = 0;
    var mouseDown = false;
    var time = 0;
    var curves = undefined;
    var velocity = undefined;

    var Path = function () {
        function Path(y, color) {
            _classCallCheck(this, Path);

            this.y = y;
            this.color = color;
            this.root = [];
            this.create();
            this.draw();
        }

        Path.prototype.create = function create() {
            var rootX = 0;
            var rootY = this.y;

            this.root = [{ x: rootX, y: rootY }];

            while (rootX < winW) {
                var casual = Math.random() > 0.5 ? 1 : -1;
                var x = parseInt(settings.amplitudeX / 2 + Math.random() * settings.amplitudeX / 2);
                var y = parseInt(rootY + casual * (settings.amplitudeY / 2 + Math.random() * settings.amplitudeY / 2));
                rootX += x;
                var delay = Math.random() * 100;
                this.root.push({ x: rootX, y: y, height: rootY, casual: casual, delay: delay });
            }
        };

        Path.prototype.draw = function draw() {
            ctx.beginPath();
            ctx.moveTo(0, winH);

            ctx.lineTo(this.root[0].x, this.root[0].y);

            for (var i = 1; i < this.root.length - 1; i++) {

                var x = this.root[i].x;
                var y = this.root[i].y;
                var nextX = this.root[i + 1].x;
                var nextY = this.root[i + 1].y;

                var xMid = (x + nextX) / 2;
                var yMid = (y + nextY) / 2;
                var cpX1 = (xMid + x) / 2;
                var cpY1 = (yMid + y) / 2;
                var cpX2 = (xMid + nextX) / 2;
                var cpY2 = (yMid + nextY) / 2;

                ctx.quadraticCurveTo(cpX1, y, xMid, yMid);
                ctx.quadraticCurveTo(cpX2, nextY, nextX, nextY);
            }

            var lastPoint = this.root.reverse()[0];
            this.root.reverse();
            ctx.lineTo(lastPoint.x, lastPoint.y);
            ctx.lineTo(winW, winH);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        };

        return Path;
    }();

    /* INIT */

    var path = undefined;
    function init() {
        c.width = winW;
        c.height = winH;
        Paths = [];

        color = chroma.scale([settings.startColor, settings.endColor]).mode('lch').colors(settings.lines);

        document.body.style = 'background: ' + settings.startColor;

        for (var i = 0; i < settings.lines; i++) {
            Paths.push(new Path(winH / settings.lines * i, color[i]));
            settings.startY = winH / settings.lines * i;
        }
    }

    /* WIN RESIZE */
    window.addEventListener('resize', function () {
        winW = window.innerWidth;
        winH = window.innerHeight;
        c.width = winW;
        c.height = winH;
        init();
    });
    window.dispatchEvent(new Event("resize"));

    /* RENDER */
    function render() {
        c.width = winW;
        c.height = winH;

        curves = mouseDown ? 2 : 4;
        velocity = mouseDown ? 6 : 0.8;

        time += mouseDown ? 0.1 : 0.05;

        Paths.forEach(function (path, i) {
            path.root.forEach(function (r, j) {
                if (j % curves == 1) {
                    var move = Math.sin(time + r.delay) * velocity * r.casual;
                    r.y -= move / 2 - move;
                }
                if (j + 1 % curves == 0) {
                    var move = Math.sin(time + r.delay) * velocity * r.casual;
                    r.x += move / 2 - move / 10;
                }
            });

            path.draw();
        });

        requestAnimationFrame(render);
    }
    render();

    /* MOUSEDOWN */
    'mousedown touchstart'.split(' ').forEach(function (e) {
        document.addEventListener(e, function () {
            mouseDown = true;
        });
    });

    /* MOUSEUP */
    'mouseup mouseleave touchend'.split(' ').forEach(function (e) {
        document.addEventListener(e, function () {
            mouseDown = false;
        });
    });

    /* MOUSEMOVE */
    'mousemove touchmove'.split(' ').forEach(function (e) {
        document.addEventListener(e, function (e) {
            mouseY = e.clientY || e.touches[0].clientY;
        });
    });

    /* DATA GUI */
    var gui = function datgui() {
        var gui = new dat.GUI();
        // dat.GUI.toggleHide();
        gui.closed = true;
        gui.add(settings, "amplitudeX", 40, 200).step(20).onChange(function (newValue) {
            init();
        });
        gui.add(settings, "amplitudeY", 0, 100).step(1).onChange(function (newValue) {
            init();
        });
        gui.add(settings, "lines", 5, 50).step(1).onChange(function (newValue) {
            init();
        });
        gui.addColor(settings, "startColor").onChange(function (newValue) {

            init();
            document.querySelector('h1').innerHTML = 'or whatever you want';
        });
        gui.addColor(settings, "endColor").onChange(function (newValue) {
            init();
            document.querySelector('h1').innerHTML = 'or whatever you want';
        });

        return gui;
    }();
</script>
<div class="content">
    <div class="form sign-in">
        <h2>欢迎回来</h2>
        <form action="Login" method="post" id="f1">
        <label>
            <span>账号</span>
            <input type="text" id="username" name="username"/>
        </label>
        <label>
            <span>密码</span>
            <input type="password" id="password" name="password"/>
        </label>
        <label>
            <span>验证码</span>
            <input  type="text"   name="code" id="code"/><br>
            <img alt="" src="code.jpg" style="float: right; margin-right: 70px;width:115px;height: 40px;" id="codeImg">
        </label>
        <br>
        <label>
            <%--                <span><font style="font-size: 8px;color: red;">111</font></span>--%>
            <span class="errorMsg" style="font-size: 8px;color: red"><%=request.getAttribute("mgs")==null?"":request.getAttribute("mgs")%></span>
        </label>
        <p class="forgot-pass"><a href="javascript:">忘记密码？</a></p>
        <button type="button" class="submit" id="btn" onclick="s1()">登 录</button>
            </form>
    </div>
    <div class="sub-cont">
        <div class="img">
            <div class="img__text m--up">
                <h2>还未注册？</h2>
                <p>立即注册吧！</p>
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
         <form action="register" method="post" id="f2">

            <label>
                <span>用户名</span>
                <input type="text" id="username1" name="username"/>
            </label>
            <label>
                <span>密码</span>
                <input type="password" id="password1" name="paw"/>
            </label>
            <label>
                <span>确定密码</span>
                <input type="password" id="repwd" name="repwd"/>
            </label>
            <label>
                <span>手机号</span>
                <input type="text" id="tele" name="tele"/>
            </label>
            <label>
                <span>邮箱</span>
                <input type="text" id="email" name="email"/>
            </label>
            <label>
<%--              <span><font style="font-size: 8px;color: red;">111</font></span>--%>
                <span class="errorMsg1" style="font-size: 8px;color: red"><%=request.getAttribute("mgs1")==null?"":request.getAttribute("mgs1")%></span>
            </label>
              <button type="button" class="submit" id="sbtn" onclick="s2()">注 册</button>
            </form>
        </div>
    </div>
</div>

<script src="js/script.js"></script>


</body>

</html>

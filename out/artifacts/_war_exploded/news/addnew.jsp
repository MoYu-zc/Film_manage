<%--
  Created by IntelliJ IDEA.
  User: 14371
  Date: 2020/12/16
  Time: 15:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>电影后台管理系统</title>
    <meta name="apple-mobile-web-app-title" content="Amaze UI" />
    <link rel="icon" type="image/png" href="../assets/i/favicon.png">
    <link rel="apple-touch-icon-precomposed" href="../assets/i/app-icon72x72@2x.png">
    <link rel="stylesheet" href="../assets/css/amazeui.min.css" />
    <link rel="stylesheet" href="../assets/css/admin.css">
    <link rel="stylesheet" href="../assets/css/app.css">
    <script type="text/javascript" src="../jquery-3.4.1.js"></script>
    <link rel="stylesheet" href="../assets/css/frame.css">
<script type="text/javascript">
    function s1() {
        var ISDN = $("#ISDN").val();
        var title = $("#title").val();
        var date = $("#datetimepicker3").val();
        var description = $("#description").val();
        var author = $("#author").val();
        if(ISDN==""){
            $(".errorMsg1").text("新闻编号不可为空");
            return false;
        }
        if(title==""){
            $(".errorMsg1").text("新闻标题不可为空");
            return false;
        }
        if(author==""){
            $(".errorMsg1").text("新闻作者不可为空");
            return false;
        }
        if(date==""){
            $(".errorMsg1").text("发表时间不可为空");
            return false;
        }
        if(description==""){
            $(".errorMsg1").text("新闻内容不可为空");
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
            confirm("确定要上传新闻吗？", submitBtn, closeBtn);
        }
    </script>
</head>
<style>

    .smart-green {
        /*margin-left: auto;*/
        margin-right: auto;
        max-width: 500px;
        /*background: #F8F8F8;*/
        padding: 30px 30px 20px 30px;
        font: 17px Arial, Helvetica, sans-serif;
        color: #666;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
    }

    .smart-green h1 > span {
        display: block;
        font-size: 11px;
        color: #FFF;
    }
    .smart-green label {
        display: block;
        margin: 0px 0px 5px;
    }
    .smart-green label > span {
        float: left;
        margin-top: 10px;
        color: #5E5E5E;
    }
    .smart-green input[type="text"],
    .smart-green textarea{
        color: #555;
        height: 40px;
        line-height: 17px;
        width: 100%;
        padding: 0px 0px 0px 10px;
        margin-top: 2px;
        border: 1px solid #E5E5E5;
        background: #FBFBFB;
        outline: 0;
        -webkit-box-shadow: inset 1px 1px 2px rgba(238, 238, 238, 0.2);
        box-shadow: inset 1px 1px 2px rgba(238, 238, 238, 0.2);
        font: normal 14px/14px Arial, Helvetica, sans-serif;
    }
    .smart-green textarea {
        height: 100px;
        padding-top: 10px;
    }
    .smart-green .button {
        background-color: #9DC45F;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-border-radius: 5px;
        border: none;
        padding: 10px 25px 10px 25px;
        color: #FFF;
        text-shadow: 1px 1px 1px #949494;
    }
    .smart-green .button:hover {
        background-color: #80A24A;
    }
    .error-msg{
        color: red;
        margin-top: 10px;
    }

</style>
<body data-type="generalComponents">

<div class="wrap-dialog dialog-hide" id="dialog-hide">
    <div class="dialog" id="dialog">
        <a class="closeBtn" id="closeBtn">X</a>
        <div class="dialog-header">
            <span class="dialog-title">提示</span>
        </div>
        <div class="dialog-body">
            <span class="dialog-message" id="dialog-message">确定要上传新闻吗？</span>
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
                新闻上传
            </li>
        </ol>
        <div class="tpl-portlet-components">
            <div class="tpl-block">
                <form  method="post" action="${pageContext.request.contextPath}/addnew" id="f1" class="smart-green">
                    <label><span>新闻编号:</span>
                        <input id="ISDN" type="text" name="ISDN"  />
                    </label>
                    <label><span>新闻标题:</span>
                        <input id="title" type="text" name="title"  />
                    </label>
                    <label><span>新闻作者:</span>
                        <input id="author" type="text" name="author"  />
                    </label>

                    <label><span>发表时间:</span>
                        <input type="text"  name="date" id="datetimepicker3" />
                    </label>

                    <label><span>新闻内容 :</span>
                        <textarea id="description" name="description"></textarea>
                    </label>
                    <br>
                    <label>
                    <span class="errorMsg1" style="font-size: 17px;color: red"><%=request.getAttribute("addnew")==null?"":request.getAttribute("addnew")%></span>
<%--                          <span ><font style="font-size: 17px;color: red;">1111111</font></span>--%>
                    </label>
                    <br>
                    <br>
                    <label><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="button" class="button" value="添加" onclick="submitHand()" />
                    </label>
                </form>

            </div>

        </div>
    </div>
    <!--右边内容end-->
</div>


</body>

<link rel="stylesheet" type="text/css" href="../css/lq.datetimepick.css"/>
<script src="../js/jquery.js" type="text/javascript"></script>
<script src='../js/selectUi.js' type='text/javascript'></script>
<script src='../js/lq.datetimepick.js' type='text/javascript'></script>
<script type="text/javascript">
    $(function (){

        $("#datetimepicker3").on("click",function(e){
            e.stopPropagation();
            $(this).lqdatetimepicker({
                css : 'datetime-day',
                dateType : 'D',
                selectback : function(){
                }
            });
        });
    });
</script>
</html>

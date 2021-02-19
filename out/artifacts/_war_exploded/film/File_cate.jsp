<%--
  Created by IntelliJ IDEA.
  User: 14371
  Date: 2020/12/16
  Time: 8:25
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!doctype html>
<html>
<head>
    <title>电影后台管理系统</title>
    <link rel="icon" type="image/png"
          href="../assets/i/favicon.png">
    <link rel="apple-touch-icon-precomposed"
          href="../assets/i/app-icon72x72@2x.png">
    <meta name="apple-mobile-web-app-title" content="Amaze UI" />
    <link rel="stylesheet"
          href="../assets/css/amazeui.min.css" />
    <link rel="stylesheet" href="../assets/css/admin.css">
    <link rel="stylesheet" href="../assets/css/app.css">
    <script type="text/javascript" src="../jquery-3.4.1.js"></script>
    <link rel="stylesheet" href="../assets/css/frame.css">
</head>
<style>
    .black_overlay{
        display: none;
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background-color: black;
        z-index:1001;
        -moz-opacity: 0.8;
        opacity:.80;
        filter: alpha(opacity=88);
    }
    .white_content {
        display: none;
        position: absolute;
        top: 17%;
        left: 25%;
        width: 45%;
        height: 35%;
        padding: 20px;
        border: 3px solid black;
        background-color: white;
        z-index:1002;
        overflow: auto;
    }
</style>
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
    .smart-green input[type="text"] {
        color: #555;
        height: 40px;
        line-height: 16px;
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
<script type="text/javascript" >
    function editFile(id){
        //获取id为 id(此id为传递过来的id值)的 tr标签的子节点
        var a=$("#tr"+id).children();
        //a[1]表示第二个单元格
        //$("#tr"+id).children().siblings().eq(1).text()表示选中'id'为id的tr的第二个单元格，将其变为可编辑状态
        a[1].innerHTML="<td ><input type='text' id='input"+id+"' value='"+$("#tr"+id).children().siblings().eq(1).text()+"'/></td>";
        //点击修改后将编辑改为保存和取消
        a[2].innerHTML="" +
            "<td><div class='am-btn-toolbar'> <div class='am-btn-group am-btn-group-xs'>" +
            "<button class='am-btn am-btn-default am-btn-xs am-text-secondary' type='button' onclick='save("+id+")'> " +
            "<span class=\"am-icon-edit\"></span>保存 </button>" +
            "<button class='am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only' type='button' onclick='back()'> " +
            "<span class='am-icon-trash-o'></span>取消 </button> </div> </div></td>";
    }
    //编辑保存操作
    function save(id) {//未定义是可能就是id重复了
        var content = $("#input"+id).val();
        if (content == "") {
            $(".errorMsg").text("修改值不能为空");
            return false;
        }

        window.location.href="${pageContext.request.contextPath}/uptype?id="+id+"&type="+content;
    }

    function back() {
        window.location.href="${pageContext.request.contextPath}/alltypes";
    }
    function del(id) {
        window.location.href="${pageContext.request.contextPath}/deltype?id="+id;
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
    function submitHand(id) {
        function submitBtn() {
            // btn();
            del(id);
        }

        function closeBtn() {
            window.history.go(0);
        }
        confirm("确定要删除吗？", submitBtn, closeBtn);
    }


</script>
<body data-type="generalComponents">

<div class="wrap-dialog dialog-hide" id="dialog-hide">
    <div class="dialog" id="dialog">
        <a class="closeBtn" id="closeBtn">X</a>
        <div class="dialog-header">
            <span class="dialog-title">提示</span>
        </div>
        <div class="dialog-body">
            <span class="dialog-message" id="dialog-message">确定要修改吗？</span>
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
                电影类别管理
            </li>
        </ol>
        <div class="tpl-portlet-components">
            <div class="tpl-block">
                <div class="am-g">
                    <div class="am-u-sm-12 am-u-md-1">
                        <div class="am-btn-group am-btn-group-xs">
                            <%--                               <a href = "javascript:void(0)" onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'">--%>
                            <button type="button"
                                    class="am-btn am-btn-default am-btn-success"  onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'">
                                <span class="am-icon-plus"></span> 新增
                            </button>

                        </div>
                    </div>
                    <div class="am-u-sm-12 am-u-md-1">
                        <div class="am-btn-group am-btn-group-xs">
                            <label>
                              <%--  <span ><font style="font-size: 17px;color: red;">111111111111</font></span> --%>
                         <span class="errorMsg" style="font-size: 16px;color: red"><%=request.getAttribute("addtype")==null?"":request.getAttribute("addtype")%></span>
                            </label>
                        </div>
                    </div>

                    <div class="am-u-sm-12 am-u-md-3">
                        <div class="am-input-group am-input-group-sm">

                        </div>
                    </div>
                </div>
                <br>
                <div class="am-g">
                    <div class="am-u-sm-12">
                        <table class="am-table am-table-striped am-table-hover table-main">
                            <thead>
                            <tr>
                                <th class="table-title">编号</th>
                                <th class="table-title">电影类别</th>
                                <th class="table-set">操作</th>
                            </tr>
                            </thead>
                            <tbody>
                                <c:forEach items="${alltypes}" var="t">
                                <tr id="tr${t.id}">
                                    <td>${t.id}</td>
                                    <td>${t.type}</td>
                                    <td>
                                        <div class="am-btn-toolbar">
                                            <div class="am-btn-group am-btn-group-xs">
                                                <button class="am-btn am-btn-default am-btn-xs am-text-secondary"
                                                        type="button" onclick="editFile(${t.id})">
                                                    <span class="am-icon-edit"></span> 编辑
                                                </button>
                                                <button class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"
                                                        type="button" onclick="submitHand(${t.id})">
                                                    <span class="am-icon-trash-o"></span> 删除
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </c:forEach>


                            <!--行end-->
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<div id="light" class="white_content">
    <form action="${pageContext.request.contextPath}/addtype" method="post" id="f1" class="smart-green">
        <label><span>类别编号:</span>
            <input id="title" type="text" name="id"  />
        </label>
        <label><span>电影类别:</span>
            <input id="name" type="text" name="type"  />
        </label>
        <br>
        <label><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="submit" class="button" value="确定" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" class="button" value="关闭" onclick= "document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'"/>
        </label>
    </form>
</div>
<div id="fade" class="black_overlay"></div>
</body>
</html>

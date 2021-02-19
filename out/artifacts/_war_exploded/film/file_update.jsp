<%--
  Created by IntelliJ IDEA.
  User: 14371
  Date: 2020/12/16
  Time: 8:16
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
    <link rel="stylesheet" href="../assets/css/frame.css">
    <script type="text/javascript" src="../jquery-3.4.1.js"></script>
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
            top: 9%;
            left: 25%;
            width: 45%;
            height: 75%;
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
            font: 15px Arial, Helvetica, sans-serif;
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
        .smart-green textarea, .smart-green select {
            color: #555;
            height: 30px;
            line-height: 15px;
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
    <script type="text/javascript" >
        function s1() {
            var ISDN = $("#ISDN").val();
            var name = $("#name").val();
            var director = $("#director").val();
            var actor = $("#actor").val();
            var type = $("#type").val();
            var country = $("#country").val();
            var language = $("#language").val();
            var score = $("#score").val();

            var description = $("#description").val();
            if(ISDN==""){
                $(".errorMsg").text("编号不可为空");
                return false;
            }
            if(name==""){
                $(".errorMsg").text("电影名称不可为空");
                return false;
            }
            if(director==""){
                $(".errorMsg").text("导演不可为空");
                return false;
            }
            if(actor==""){
                $(".errorMsg").text("主演不可为空");
                return false;
            }
            if(type==""){
                $(".errorMsg").text("类型不可为空");
                return false;
            }
            if(country==""){
                $(".errorMsg").text("制片国家不可为空");
                return false;
            }
            if(language==""){
                $(".errorMsg").text("语言不可为空");
                return false;
            }
            if(score==""){
                $(".errorMsg").text("评分不可为空");
                return false;
            }

            if(description==""){
                $(".errorMsg").text("描述不可为空");
                return false;
            }
            $("#f1").submit();
        }
    </script>
    <script type="text/javascript" >
        function editFile(id){
            //获取id为 id(此id为传递过来的id值)的 tr标签的子节点
            var a=$("#tr"+id).children();
            //a[1]表示第二个单元格
            //$("#tr"+id).children().siblings().eq(1).text()表示选中'id'为id的tr的第二个单元格，将其变为可编辑状态
            a[1].innerHTML="<td ><input type='text' id='input1"+id+"' value='"+$("#tr"+id).children().siblings().eq(1).text()+"'/></td>";
            a[2].innerHTML="<td ><input type='text' id='input2"+id+"' value='"+$("#tr"+id).children().siblings().eq(2).text()+"'/></td>";
            a[3].innerHTML="<td ><input type='text' id='input3"+id+"' value='"+$("#tr"+id).children().siblings().eq(3).text()+"'/></td>";
            a[4].innerHTML="<td ><input type='text' id='input4"+id+"' value='"+$("#tr"+id).children().siblings().eq(4).text()+"'/></td>";
            a[5].innerHTML="<td ><input type='text' id='input5"+id+"' value='"+$("#tr"+id).children().siblings().eq(5).text()+"'/></td>";
            a[6].innerHTML="<td ><input type='text' id='input6"+id+"' value='"+$("#tr"+id).children().siblings().eq(6).text()+"'/></td>";
            a[7].innerHTML="<td ><input type='text' id='input7"+id+"' value='"+$("#tr"+id).children().siblings().eq(7).text()+"'/></td>";
            a[8].innerHTML="<td ><input type='text' id='input8"+id+"' value='"+$("#tr"+id).children().siblings().eq(8).text()+"'/></td>";
            //点击修改后将编辑改为保存和取消
            a[9].innerHTML="" +
                "<td><div class='am-btn-toolbar'> <div class='am-btn-group am-btn-group-xs'>" +
                "<button class='am-btn am-btn-default am-btn-xs am-text-secondary' type='button' onclick='save("+id+")'> " +
                "<span class=\"am-icon-edit\"></span>保存 </button>" +
                "<button class='am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only' type='button' onclick='back()'> " +
                "<span class='am-icon-trash-o'></span>取消 </button> </div> </div></td>";
        }
        //编辑保存操作
        function save(id) {//未定义是可能就是id重复了
            var name = $("#input1"+id).val();
            var director = $("#input2"+id).val();
            var actor = $("#input3"+id).val();
            var type = $("#input4"+id).val();
            var country = $("#input5"+id).val();
            var language = $("#input6"+id).val();
            var score = $("#input7"+id).val();
            var description = $("#input8"+id).val();

            if (name == "") {
                $(".errorMsg").text("电影名称不能为空");
                return false;
            }
            if (director == "") {
                $(".errorMsg").text("导演不能为空");
                return false;
            }
            if (actor == "") {
                $(".errorMsg").text("主演不能为空");
                return false;
            }
            if (type == "") {
                $(".errorMsg").text("类型不能为空");
                return false;
            }
            if (country == "") {
                $(".errorMsg").text("制片国家不能为空");
                return false;
            }
            if (language == "") {
                $(".errorMsg").text("语言不能为空");
                return false;
            }
            if (score == "") {
                $(".errorMsg").text("评分不能为空");
                return false;
            }
            if (description == "") {
                $(".errorMsg").text("描述不能为空");
                return false;
            }
            window.location.href="${pageContext.request.contextPath}/upfilm?ISDN="+id+ "&name="+name+"&director="+director+"&actor="+actor+"&type="+type+"&country="+country+"&language="+language+"&score="+score+"&description="+description;
        }

        function back() {
            window.location.href="${pageContext.request.contextPath}/modfilm";
        }
        function del(id) {
            window.location.href="${pageContext.request.contextPath}/delfilm?ISDN="+id;
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
</head>

<body data-type="generalComponents">

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
                电影信息管理
            </li>
        </ol>
        <div class="tpl-portlet-components">
            <br>
            <div class="tpl-block">
                    <div class="am-g">
                        <div class="am-u-sm-12 am-u-md-1">
                           <div class="am-btn-group am-btn-group-xs">
                                   <button type="button"
                                    class="am-btn am-btn-default am-btn-success"  onclick = "document.getElementById('light').style.display='block';document.getElementById('fade').style.display='block'">
                                    <span class="am-icon-plus"></span> 新增
                                </button>
                            </div>
                        </div>
                        <div class="am-u-sm-12 am-u-md-3">
                            <div class="am-btn-group am-btn-group-xs">
                                <label>
<%--                                      <span ><font style="font-size: 17px;color: red;">111111111111</font></span>--%>
                                    <span class="errorMsg" style="font-size: 16px;color: red"><%=request.getAttribute("films1")==null?"":request.getAttribute("films1")%></span>
                                </label>
                            </div>
                        </div>
                        <div class="am-u-sm-12 am-u-md-3">
                            <form action="${pageContext.request.contextPath}/sfByT" method="post">
                            <div class="am-btn-group am-btn-group-sm">
                                <label >请选择电影类别：</label>
                                    <select   style="font-size: 16px;height: 30px;width: 100px;" name="type">
                                        <c:forEach items="${alltypes}" var="types">
                                            <option value="${types.type}">${types.type}</option>
                                        </c:forEach>
                                    </select>
                                    <button class="am-btn  am-btn-default am-btn-success tpl-am-btn-success am-icon-search" type="submit"></button>
                            </div>
                            </form>
                        </div>

                        <div class="am-u-sm-12 am-u-md-3">

                            <form action="${pageContext.request.contextPath}/sfByI" method="post">
                            <div class="am-input-group am-input-group-sm">
                                <input type="text" name="ISDN" placeholder="请输入电影编号" class="am-form-field">
                                <span class="am-input-group-btn">
                                    <button class="am-btn  am-btn-default am-btn-success tpl-am-btn-success am-icon-search" type="submit"></button> </span>
                            </div>
                            </form>
                            <br>
                            <form action="${pageContext.request.contextPath}/sfByD" method="post">
                            <div class="am-input-group am-input-group-sm">
                                <input type="text" name="director" placeholder="请输入导演" class="am-form-field">
                                <span class="am-input-group-btn">
                                    <button class="am-btn  am-btn-default am-btn-success tpl-am-btn-success am-icon-search" type="submit"></button> </span>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div class="am-g">
                        <div class="am-u-sm-12">
                            <table class="am-table am-table-striped am-table-hover table-main">
                                <thead>
                                <tr>
                                    <th class="table-title">编号</th>
                                    <th class="table-title">电影名称</th>
                                    <th class="table-title">导演</th>
                                    <th class="table-title">主演</th>
                                    <th class="table-title">类型</th>
                                    <th class="table-title">制片国家</th>
                                    <th class="table-title">语言</th>
                                    <th class="table-title">评分</th>
                                    <th class="table-title">描述</th>
                                    <th class="table-set">操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <c:forEach items="${films}" var="f">
                                <tr id="tr${f.ISDN}">
                                    <td>${f.ISDN}</td>
                                    <td>${f.name}</td>
                                    <td>${f.director}</td>
                                    <td>${f.actor}</td>
                                    <td>${f.type}</td>
                                    <td>${f.country}</td>
                                    <td>${f.language}</td>
                                    <td>${f.score}</td>
                                    <td>${f.description}</td>
                                    <td>
                                        <div class="am-btn-toolbar">
                                            <div class="am-btn-group am-btn-group-xs">
                                                <button class="am-btn am-btn-default am-btn-xs am-text-secondary"
                                                        type="button" onclick="editFile(${f.ISDN})">
                                                    <span class="am-icon-edit"></span> 编辑
                                                </button>
                                                <button class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"
                                                        type="button" onclick="submitHand(${f.ISDN})">
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

    <div id="light" class="white_content">
        <form  method="post" action="${pageContext.request.contextPath}/addfilm" class="smart-green" id="f1" enctype="multipart/form-data">
            <label><span>电影编号:</span>
                <input id="title" type="text" name="ISDN"  />
            </label>
            <label><span>电影名称:</span>
                <input id="name" type="text" name="name"  />
            </label>
            <label><span>电影编导:</span>
                <input id="director" type="text" name="director"  />
            </label>
            <label><span>电影主演:</span>
                <input id="actor" type="text" name="actor"  />
            </label>
            <label><span>电影类型:</span><br>
                <select  style="font-size: 16px;" name="type">
                    <c:forEach items="${alltypes}" var="types">
                        <option value="${types.type}">${types.type}</option>
                    </c:forEach>
                </select>
<%--                <input id="type" type="text" name="type"  />--%>
            </label>
            <label><span>电影国家:</span>
                <input id="country" type="text" name="country"  />
            </label>
            <label><span>电影语言:</span>
                <input id="language" type="text" name="language"  />
            </label>
            <label><span>电影评分:</span>
                <input id="score" type="text" name="score"  />
            </label>
            <label><span>上传照片:</span><br>
<%--                <input id="photo" type="text" name="photo"  />--%>
                <input type="file" name="file" accept="image/*"/>
            </label>
            <label><span>上传视频:</span><br>
<%--                <input id="href" type="text" name="href"  />--%>
                <input type="file" name="file1" accept="video/*"/>
            </label>
            <label><span>电影描述 :</span>
                <textarea id="description" name="description"></textarea>
              </label>
             <br>
            <label><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><input type="button" class="button" id="btn" onclick="s1()" value="确定" />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" class="button" value="关闭" onclick= "document.getElementById('light').style.display='none';document.getElementById('fade').style.display='none'"/>
            </label>

        </form>

    </div>
    <div id="fade" class="black_overlay"></div>
</body>

</html>

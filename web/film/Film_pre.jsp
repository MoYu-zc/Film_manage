<%--
  Created by IntelliJ IDEA.
  User: 14371
  Date: 2020/12/16
  Time: 8:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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

    <%--    <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">--%>
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
                电影展示
            </li>
        </ol>
        <div class="tpl-portlet-components">
            <div class="tpl-block">
                <div class="am-g">
                    <div class="am-u-sm-12 am-u-md-1"></div>
                    <div class="am-u-sm-12 am-u-md-1">
                        <div class="am-btn-group am-btn-group-xs"></div>
                    </div>
                <div class="am-u-sm-12 am-u-md-3">
                    <form action="${pageContext.request.contextPath}/sfByi" method="post">
                     <div class="am-input-group am-input-group-sm">
                        <input type="text" name="ISDN" placeholder="请输入电影编号" class="am-form-field">
                        <span class="am-input-group-btn">
                            <button class="am-btn  am-btn-default am-btn-success tpl-am-btn-success am-icon-search" type="submit"/>
                        </span>
                    </div>
                    </form>
                </div>
             </div>
                <div class="am-g">
                    <div class="am-u-sm-12">
                        <c:forEach items="${allfilms}" var="fs">
                            <div style="width:210px;height: 290px; border:1px solid black; float:left; margin:6px 4px; ">
                                <a href="getDetail?ISDN=${fs.ISDN}" >
                                <img src="${fs.photo}" style="height: 260px;width: 210px;">
                                <br>&nbsp;
                                <span style="font-size: 17px;font-weight: bold;text-align: left">${fs.name}</span></a>
<%--                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--%>
                                <br>
                               <span style="font-size: 15px;text-align: right;color: red;font-weight: bold;">${fs.score}分</span>
                            </div>
                        </c:forEach>
                    </div>
                </div>
            </div>
            </div>

        </div>
    </div>


</body>

</html>

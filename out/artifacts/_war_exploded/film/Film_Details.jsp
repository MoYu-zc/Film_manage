<%--
  Created by IntelliJ IDEA.
  User: 14371
  Date: 2020/12/20
  Time: 23:46
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML>
<html>
<head>
    <title>电影后台管理系统</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
    <script src="../css/5grid/init.js?use=mobile,desktop"></script>
    <script src="../js/jquery.formerize-1.1.js"></script>
    <script src="../js/init.js"></script>
        <link rel="stylesheet" type="text/css" href="../css/5grid/core.css" />
        <link rel="stylesheet" type="text/css" href="../css/5grid/core-desktop.css" />
        <link rel="stylesheet" type="text/css" href="../css/5grid/core-1200px.css" />
        <link rel="stylesheet" type="text/css" href="../css/5grid/core-noscript.css" />
        <link rel="stylesheet" type="text/css" href="../css/style_s.css" />
        <link rel="stylesheet" type="text/css"  href="../css/style-desktop.css" />
        <link rel="stylesheet" type="text/css" href="../css/noscript.css" />
    <!--[if lte IE 8]><link rel="stylesheet" type="text/css" href="../css/ie8.css" /><![endif]-->
</head>
<body class="homepage">
<!-- Wrapper-->
<div id="wrapper">
    <a href="${pageContext.request.contextPath}/allfilm"><img src="../assets/img/back.png" style="width: 40px;height: 40px;"/></a>
    <!-- Nav -->
    <nav id="nav">
        <a href="#me" class=" icon-user active" >
            <img src="../images/info.png" style="height: 50px;width: 50px;">
        </a>
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
        <a href="#work" class=" icon-folder" >
            <img src="../images/film.png" style="height: 45px;width: 45px;">
        </a>
    </nav>
    <c:forEach items="${filmDe}" var="filmDe">
    <!-- Main -->
    <div id="main">

        <!-- Me -->
        <article id="me" class="panel">
            <header>
                <h1>${filmDe.name}</h1>
                <span class="byline">${filmDe.score} 分</span>
            </header>
            <a href="#work" class="jumplink pic">
                <span class="jumplink arrow icon icon-right"><span>See Film</span></span>
                <img src="${filmDe.photo}" alt="" style="width: 285px;height: 400px;"/>
            </a>
        </article>

        <!-- Work -->
        <article id="work" class="panel">
<center>
                <video src="${filmDe.href}" controls="true" style="height: 450px;width: 800px;background-color: black;object-fit: fill;" controlslist="nodownload" ></video>
</center>
            <br>
            <header>
                <h2> 电影名称：${filmDe.name}</h2>
            </header>
            <p>
                        评分：${filmDe.score}分<br>
                        类型：${filmDe.type}<br>
                        主演:${filmDe.actor}<br>
                        导演：${filmDe.director}<br>
                        描述：${filmDe.description}
            </p>

        </article>

    </div>
    </c:forEach>
</div>

</body>

</html>

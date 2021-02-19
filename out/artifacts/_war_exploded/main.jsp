<%--
  Created by IntelliJ IDEA.
  User: 14371
  Date: 2020/12/16
  Time: 8:17
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta  charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>电影后台管理系统</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png"
          href="assets/i/favicon.png">
    <link rel="apple-touch-icon-precomposed"
          href="assets/i/app-icon72x72@2x.png">
    <meta name="apple-mobile-web-app-title" content="Amaze UI" />
    <link rel="stylesheet"
          href="assets/css/amazeui.min.css" />
    <link rel="stylesheet" href="assets/css/admin.css">
    <link rel="stylesheet" href="assets/css/app.css">
    <script type="text/javascript" src="jquery-3.4.1.js"></script>
    <script src="js/test.js" type="text/javascript"  charset="UTF-8" ></script>
    <script src="js/common.js" type="text/javascript"  charset="UTF-8"></script>
    <script src="js/config.js" type="text/javascript"  charset="UTF-8"></script>

    <%--    <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">--%>
</head>
<style>

    /**{*/
    /*	margin: 0;*/
    /*	padding: 0;*/
    /*}*/

    body{
        background-attachment: fixed;
        color: #F5F4F6;
        font-size: 12px;
        font-weight: bold;
        /*overflow: hidden;*/
        /*width: 1000px;*/
        /*height: 900px;*/
        font-family: "微软雅黑";

    }

    audio{
        position: absolute;
        right: 0;
        opacity: 0.1;
        transition: all 1s;

    }

    audio:hover{
        opacity: 1;
    }

    .current{
        color: #D1A3F7;
    }


    video{
        z-index: -1;
        /* object-fit: fill; */
        position: fixed;
        /* right: 0px;
        bottom: 0px; */
        min-width: 100%;
        min-height: 100%;
        /* height: auto;
        width: auto; */
    }


    .main-content{
        position: absolute;
        top:60%;
        left: 55%;
    }


    .main-content .year{
        position: relative;
        top: -13px;
        left: -38px;
        text-align: center
    }

    .main-content .year span{
        position: absolute;
        width: 80px;
    }



    .main-content .month{
        position: relative;
        top: -13px;
        left: 40px;
    }

    .month span{
        position: absolute;
        width: 60px;

    }




    .main-content .day{
        position: relative;
        top: -13px;
        left: 85px;
    }

    .day span{
        position: absolute;
        width: 65px;

    }




    .main-content .week{
        position: relative;
        top: -13px;
        left: 145px;
    }
    .week span{
        position: absolute;
        width: 65px;

    }


    .main-content .shichen{
        position: relative;
        top: -13px;
        left: 200px;
    }
    .shichen span{
        position: absolute;
        width: 125px;

    }


    .main-content .hour{
        position: relative;
        top: -13px;
        left: 240px;
    }
    .hour span{
        position: absolute;
        width: 60px;

    }


    .main-content .minute{
        position: relative;
        top: -13px;
        left: 300px;
    }
    .minute span{
        position: absolute;
        width: 60px;

    }


    .main-content .second{
        position: relative;
        top: -13px;
        left: 370px;
    }
    .second span{
        position: absolute;
        width: 60px;

    }



</style>
<body data-type="generalComponents">

<%@include file="top.jsp"%>

<div class="tpl-page-container tpl-page-header-fixed">
    <!--左边start-->
    <%@include file="sidebar.jsp"%>
    <!--左边end-->
    <div class="tpl-content-wrapper">
        <!--右边内容start-->
        <div class="tpl-portlet-components" style="height: 40px;">
            <ol class="am-breadcrumb">
                <li>
                    <a href="#" class="am-icon-home">首页</a>
                </li>
            </ol>
        </div>
        <div class="tpl-portlet-components" style="height: 80px;">
            <div class="tpl-block" >
                <div class="am-g">
                    <div class="am-u-sm-12">
                        <h1 style="text-align:center;">欢迎使用电影后台管理系统</h1>
                    </div>
                </div>
            </div>
        </div>

        <div class="tpl-portlet-components" style="height: 900px; ">

            <div class="main-content" >
                <div class="year">
                    <!-- <span>2019</span> -->
                </div>
                <div class="month"></div>
                <div class="day"></div>
                <div class="week"></div>
                <div class="shichen"></div>
                <div class="hour"></div>
                <div class="minute"></div>
                <div class="second"></div>

            </div>
        </div>



    </div>


    <!--右边内容end-->
</div>



</body>

</html>
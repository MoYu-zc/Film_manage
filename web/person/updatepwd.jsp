<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
		<script type="text/javascript" src="../jquery-3.4.1.js"></script>
		<link rel="stylesheet" href="../assets/css/frame.css">
		<script type="text/javascript" >
			function s1() {

				   // 获取密码
				   var passwordValue1 = $("#paw").val();
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
				   var repwdValue1 = $("#password2").val();
				   // 验证确认密码和密码一致
				   if (passwordValue1 != repwdValue1) {
					   // 提示用户

					   $(".errorMsg1").text("确认密码和密码不一致！");
					   $("#password1").val("");
					   $("#password2").val("");
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
				confirm("确定要修改密码吗？", submitBtn, closeBtn);
			}
		</script>

	</head>
	<body data-type="generalComponents">
	<div class="wrap-dialog dialog-hide" id="dialog-hide">
		<div class="dialog" id="dialog">
			<a class="closeBtn" id="closeBtn">X</a>
			<div class="dialog-header">
				<span class="dialog-title">提示</span>
			</div>
			<div class="dialog-body">
				<span class="dialog-message" id="dialog-message">确定要修改密码吗？</span>
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
						密码修改
					</li>
				</ol>
				<div class="tpl-portlet-components">
					<div class="tpl-block">
					<!-- 详情开始 -->
					<div class="am-g tpl-amazeui-form">
                        <div class="am-u-sm-12 am-u-md-9">
							<br> <br> <br>
                            <form class="am-form am-form-horizontal" id="f1" action="${pageContext.request.contextPath}/uppaw" method="post" >
                            	<input type="hidden" name="id" value="${sessionScope.user.id}"/>
                                <div class="am-form-group">
                                    <label  class="am-u-sm-3 am-form-label">原始密码</label>
                                    <div class="am-u-sm-9">
                                        <input type="password" id="paw1" name="paw1"/>
                                    </div>
                                </div>

                                <div class="am-form-group">
                                    <label  class="am-u-sm-3 am-form-label">新密码</label>
                                    <div class="am-u-sm-9">
                                        <input type="password" id="paw" name="paw"/>
                                    </div>
                                </div>     
								
								<div class="am-form-group">
                                    <label  class="am-u-sm-3 am-form-label">确认新密码</label>
                                    <div class="am-u-sm-9">
                                        <input type="password" id="password2"/>
                                    </div>
                                </div>

								
                                <div class="am-form-group">

                                    <div class="am-u-sm-9 am-u-sm-push-3">
										<label>
<%--											<span ><font style="font-size: 17px;color: red;">111</font></span>--%>
									    <span class="errorMsg1" style="font-size: 17px;color: red"><%=request.getAttribute("mgs3")==null?"":request.getAttribute("mgs3")%></span>
										</label>
										<br>
										<br>
                                        <button type="button" class="am-btn am-btn-primary" id="btn" onclick="submitHand()">保存修改</button>
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

		

		<!-- 修改对话框end -->


	</body>

</html>
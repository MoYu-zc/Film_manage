
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<header class="am-topbar am-topbar-inverse admin-header">

<div class="am-topbar-brand">
	电影后台管理系统
</div>
<div class="am-icon-list tpl-header-nav-hover-ico am-fl am-margin-right">
</div>
<div class="am-collapse am-topbar-collapse" id="topbar-collapse">
	<ul
		class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list tpl-header-list">
		<li class="am-hide-sm-only">
<%--			<a href="javascript:" id="admin-fullscreen"--%>
<%--			   class="tpl-header-list-link"><span class="am-icon-arrows-alt"></span>--%>
<%--				<span class="admin-fullText">开启全屏</span>--%>
<%--			</a>--%>
		</li>
		<li class="am-dropdown" data-am-dropdown data-am-dropdown-toggle>
			<a class="am-dropdown-toggle tpl-header-list-link"
				href="javascript:"> <span class="tpl-header-list-user-nick">${sessionScope.user.username} </span><span
				class="tpl-header-list-user-ico"> </span> </a>
		</li>
		<li>
			<a href="${pageContext.request.contextPath}/exit" class="tpl-header-list-link"><span
				class="am-icon-sign-out tpl-header-list-ico-out-size"></span>
			</a>
		</li>
	</ul>
</div>
</header>
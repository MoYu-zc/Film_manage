package com.zc.Fliter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

/**
 * @author MoYu-zc
 * @date 2020/12/24 9:22
 */
public class LoginFilter implements Filter {


    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest)servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String servletPath = request.getServletPath();  //获取客户端所请求的脚本文件的文件路径
        if(servletPath.equals("/index.jsp") ||servletPath.equals("/Login")||servletPath.equals(".js")||servletPath.equals(".css")||servletPath.equals(".png"))
        {
            filterChain.doFilter(request,response);
        }else {
            HttpSession session = request.getSession();
            if (session.getAttribute("user") == null) {
                //  没有登录
                response.sendRedirect(request.getContextPath() + "/index.jsp");
            }else {
                filterChain.doFilter(request,response);

            }
        }
    }

    @Override
    public void destroy() {

    }
}

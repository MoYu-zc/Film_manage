package com.zc.Fliter;


import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;


/**
 * @author MoYu-zc
 * @date 2020/12/23 23:34
 */

public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException, ServletException {

//        System.out.println("uri: " + request.getRequestURI());
        if (request.getRequestURI().contains(".js")||request.getRequestURI().contains(".css")
                ||request.getRequestURI().contains(".png")||request.getRequestURI().contains(".jpg")) {
            return true;
        }
        HttpSession session = request.getSession();

        if (session.getAttribute("user")!= null) {
            return true;
        }

        request.getRequestDispatcher(request.getContextPath()+"/index.jsp").forward(request,response);
        return false;
}

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }

}


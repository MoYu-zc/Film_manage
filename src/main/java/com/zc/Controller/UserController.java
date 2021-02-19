package com.zc.Controller;

import com.google.code.kaptcha.Constants;
import com.zc.Service.UserService;
import com.zc.pojo.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

/**
 * @author MoYu-zc
 * @date 2020/12/15 8:42
 */
@Controller
public class UserController {

    @Autowired
    private   HttpServletRequest request;
    @Autowired
    @Qualifier("userServiceimpl")
    private UserService userService;

    @RequestMapping("/Login")
    public String getUserList(String username, String password, String code){

        List<user> userList = userService.getUserList();
        for (user user : userList) {
            System.out.println(user);
            if(user.getUsername().equals(username)&&user.getPaw().equals(password)){
                HttpSession session = request.getSession();
                Object attribute = session.getAttribute(Constants.KAPTCHA_SESSION_KEY);
                if(code.equals(attribute)){
//                      model.addAttribute("user",user);
                    //request.setAttribute("user",user);
                    session.setAttribute("user",user);
                    return "main.jsp";
                }else {
                    request.setAttribute("mgs", "验证码错误");
                    return "index.jsp";
                }
            }

        }
        //  System.out.println(user.getUsername()+"-----"+user.getPaw());
        request.setAttribute("mgs", "用户名或密码错误");
        return "index.jsp";
    }

    @RequestMapping("/exit")
    public String exit(){
       request.getSession().removeAttribute("user");
        return "index.jsp";
    }

    @RequestMapping("/register")
       public String insertUser(user user){

        List<user> userList = userService.getUserList();
        for (user user1 : userList) {
            if (user1.getUsername().equals(user.getUsername())){
                request.setAttribute("mgs1", "已经存在该用户");
                return "index.jsp";
            }else {
                System.out.println(user);
                userService.insertUser(user);
                return "index.jsp";
            }
        }
        return "index.jsp";
       }

       @RequestMapping("/upUser")
       public String upUser(user user){
           int i = userService.upUser(user);
           System.out.println(user+"-----"+i);
           if (i>0){
              user user1 = userService.getUserById(user.getId());
               request.getSession().setAttribute("user",user1);
               request.setAttribute("mgs4","修改成功");
               return "person/person_info.jsp";
           }else{
               request.setAttribute("mgs4","修改失败");
               return "person/person_info.jsp";
           }
       }

    /**
     * 修改密码
     * @param user
     * @return
     */
    @RequestMapping("/uppaw")
    public String uppaw(user user, String paw1){
       user userById = userService.getUserById(user.getId());
        System.out.println(user+"----------"+paw1);
        if(userById.getPaw().equals(paw1)){
            userService.uppaw(user);
            user user1 = userService.getUserById(user.getId());
            request.getSession().setAttribute("user",user1);
            request.setAttribute("mgs3","修改密码成功");
            return "person/updatepwd.jsp";
        }else{
            request.setAttribute("mgs3","输入原始密码不对");
            return "person/updatepwd.jsp";
        }
    }



}

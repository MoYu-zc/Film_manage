package com.zc.Controller;

import com.zc.Service.TypesService;
import com.zc.pojo.types;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @author MoYu-zc
 * @date 2020/12/16 23:08
 */
@Controller
public class TypesController {

    @Autowired
    private HttpServletRequest request;

    @Autowired
    @Qualifier("typesServiceimpl")
    private TypesService typesService;

    @RequestMapping("/alltypes")
    public String Alltypes(Model model){
//        String path = request.getSession().getServletContext().getRealPath("/");
//        String realPath = request.getServletContext().getRealPath("/");
//        System.out.println(path);
//        System.out.println(realPath);
//        String basePath = request.getRequestURL().substring(0,request.getRequestURL().lastIndexOf("/"));
//        System.out.println(basePath);


        List<types> alltypes = typesService.Alltypes();
        model.addAttribute("alltypes",alltypes);
        return "film/File_cate.jsp";
    }

    @RequestMapping("/addtype")
    public String addtype(types types){
        System.out.println(types);
        List<types> alltypes = typesService.Alltypes();
        for (com.zc.pojo.types alltype : alltypes) {
            if (alltype.getId().equals(types.getId())){
                request.setAttribute("addtype","已经存在该电影类别编号");
                return "forward:/alltypes";
            }
            else if (alltype.getType().equals(types.getType())){
                    request.setAttribute("addtype","已经存在该电影类别");
                    return "forward:/alltypes";
            }

        }
        int i = typesService.addtype(types);
        if(i>0){
            request.setAttribute("addtype","添加成功");
            return "forward:/alltypes";
        }else{
            request.setAttribute("addtype","添加失败");
            return "forward:/alltypes";
        }
    }

    @RequestMapping("/uptype")
    public String Updatetype(types types){
        List<types> alltypes = typesService.Alltypes();
        for (com.zc.pojo.types alltype : alltypes) {
            if (alltype.getType().equals(types.getType())) {
                request.setAttribute("addtype", "已经存在该电影类别");
                return "forward:/alltypes";
            }
            else {
                int i = typesService.Updatetype(types);
                if(i>0){
                    request.setAttribute("addtype","添加成功");
                    return "forward:/alltypes";
                }else{
                    request.setAttribute("addtype","添加失败");
                    return "forward:/alltypes";
                }
            }
        }
        //System.out.println(types);
        return "forward:/alltypes";
    }

    @RequestMapping("/deltype")
    public String Deltype(int id){
        int i = typesService.DeletetypeById(id);
        if(i>0){
            request.setAttribute("addtype","删除成功");
            return "forward:/alltypes";
        }else{
            request.setAttribute("addtype","删除失败");
            return "forward:/alltypes";
        }
    }

}

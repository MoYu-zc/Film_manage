package com.zc.Controller;

import com.zc.Service.FilmService;
import com.zc.Service.TypesService;
import com.zc.pojo.film;
import com.zc.pojo.types;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.List;

/**
 * @author MoYu-zc
 * @date 2020/12/18 16:43
 */
@Controller
public class FilmController {

    @Autowired
    @Qualifier("filmServiceimpl")
    private FilmService filmService;

    @Autowired
    @Qualifier("typesServiceimpl")
    private TypesService typesService;

    @Autowired
    private HttpServletRequest request;

    @RequestMapping("/modfilm")
    public String modfilms(Model model){
        List<film> films = filmService.AllFilm();
        List<types> alltypes = typesService.Alltypes();
        model.addAttribute("films",films);
        model.addAttribute("alltypes",alltypes);
        return "film/file_update.jsp";
    }

    @RequestMapping("/allfilm")
    public String allfilms(Model model){
        List<film> films = filmService.AllFilm();
        model.addAttribute("allfilms",films);
        return "film/Film_pre.jsp";
    }

    @RequestMapping("/delfilm")
    public String delfilm(int ISDN){
        int i = filmService.DelFilm(ISDN);
        if(i>0){
            request.setAttribute("films1","删除成功");
            return "forward:/modfilm";
        }else{
            request.setAttribute("films1","删除失败");
            return "forward:/modfilm";
        }
    }


    @RequestMapping("/addfilm")
    public String addfilm(film film ){


        String UPLOAD_DIRECTORY = request.getServletContext().getRealPath("/")+"video/";//1.文件根目录
        File uploadDir = new File(UPLOAD_DIRECTORY);
        if (!uploadDir.exists()){
            uploadDir.mkdirs();
        }
      //  System.out.println(film);

        //2.如果请求包含内容
        if(ServletFileUpload.isMultipartContent(request)){
            try {
                List<FileItem> multiparts = new ServletFileUpload(new DiskFileItemFactory()).parseRequest(request);
                for(FileItem item : multiparts){
                    if (item.isFormField()){
                        if ("ISDN".equals(item.getFieldName())) {
                            //获取表单文本域数据
                            String text;
                            try {
                                text = item.getString("UTF-8");
                                film.setISDN(Integer.parseInt(text));
                                List<film> films = filmService.AllFilm();
                                for (film film1 : films) {
                                    System.out.println(film1);
                                    if(film1.getISDN()==Integer.parseInt(text)) {
                                        System.out.println("1111");
                                        request.setAttribute("films1", "已有该电影编号");
                                        return "forward:/modfilm";
                                    }
                                }
                            } catch (UnsupportedEncodingException e) {
                                // TODO 自动生成的 catch 块
                                e.printStackTrace();
                            }
                        }
                        if ("name".equals(item.getFieldName())) {
                            //获取表单文本域数据
                            String text;
                            try {
                                text = item.getString("UTF-8");
                                film.setName(text);
                            } catch (UnsupportedEncodingException e) {
                                // TODO 自动生成的 catch 块
                                e.printStackTrace();
                            }
                        }
                        if ("director".equals(item.getFieldName())) {
                            //获取表单文本域数据
                            String text;
                            try {
                                text = item.getString("UTF-8");
                                film.setDirector(text);
                            } catch (UnsupportedEncodingException e) {
                                // TODO 自动生成的 catch 块
                                e.printStackTrace();
                            }
                        }
                        if ("actor".equals(item.getFieldName())) {
                            //获取表单文本域数据
                            String text;
                            try {
                                text = item.getString("UTF-8");
                                film.setActor(text);
                            } catch (UnsupportedEncodingException e) {
                                // TODO 自动生成的 catch 块
                                e.printStackTrace();
                            }
                        }
                        if ("type".equals(item.getFieldName())) {
                            //获取表单文本域数据
                            String text;
                            try {
                                text = item.getString("UTF-8");
                                film.setType(text);
                            } catch (UnsupportedEncodingException e) {
                                // TODO 自动生成的 catch 块
                                e.printStackTrace();
                            }
                        }
                        if ("country".equals(item.getFieldName())) {
                            //获取表单文本域数据
                            String text;
                            try {
                                text = item.getString("UTF-8");
                                film.setCountry(text);
                            } catch (UnsupportedEncodingException e) {
                                // TODO 自动生成的 catch 块
                                e.printStackTrace();
                            }
                        }
                        if ("language".equals(item.getFieldName())) {
                            //获取表单文本域数据
                            String text;
                            try {
                                text = item.getString("UTF-8");
                                film.setLanguage(text);
                            } catch (UnsupportedEncodingException e) {
                                // TODO 自动生成的 catch 块
                                e.printStackTrace();
                            }
                        }
                        if ("score".equals(item.getFieldName())) {
                            //获取表单文本域数据
                            String text;
                            try {
                                text = item.getString("UTF-8");
                                film.setScore(Double.parseDouble(text));
                            } catch (UnsupportedEncodingException e) {
                                // TODO 自动生成的 catch 块
                                e.printStackTrace();
                            }
                        }
                        if ("description".equals(item.getFieldName())) {
                            //获取表单文本域数据
                            String text;
                            try {
                                text = item.getString("UTF-8");
                                film.setDescription(text);
                            } catch (UnsupportedEncodingException e) {
                                // TODO 自动生成的 catch 块
                                e.printStackTrace();
                            }
                        }


                    }
                    if(!item.isFormField()){
                        //3.获取选择名
                        String name = new File(item.getName()).getName();
                        String n1= name.substring(name.lastIndexOf(".")).toLowerCase();
                        System.out.println(n1);
                        if(n1.equals(".jpg")||n1.equals(".png")){
                            String l= request.getRequestURL().substring(0,request.getRequestURL().lastIndexOf("/"))+"/video/";
                            film.setPhoto(l + File.separator + name);
                        }
                        else if(n1.equals(".mp4")){
                            String l= request.getRequestURL().substring(0,request.getRequestURL().lastIndexOf("/"))+"/video/";
                            film.setHref( l+ File.separator +name);
                        }
                        //4.将文件写到指定位置
                        item.write( new File(UPLOAD_DIRECTORY + File.separator + name));
                    }
                }
            } catch (Exception ex) {
                request.setAttribute("films1", "文件上传失败" );
            }

        }else{

            request.setAttribute("films1","文件上传失败");
            return "forward:/modfilm";
        }

        int i = filmService.AddFilm(film);
        if(i>0){

            request.setAttribute("films1","添加成功");
            return "forward:/modfilm";
        }else{
            request.setAttribute("films1","添加成功");
            return "forward:/modfilm";
        }

    }

    @RequestMapping("/getDetail")
    public String getDetail(int ISDN,Model model){
        List<film> films = filmService.selectfilmByISDN(ISDN);
        model.addAttribute("filmDe",films);
        return "film/Film_Details.jsp";
    }

    @RequestMapping("/upfilm")
    public String upfilm(film film){
        int i = filmService.upFilm(film);
        if(i>0){
            request.setAttribute("films1","更新成功");
            return "forward:/modfilm";
        }else{
            request.setAttribute("films1","更新成功");
            return "forward:/modfilm";
        }
    }

    @RequestMapping("/sfByI")
    public String selectfilmByISDN(int ISDN,Model model){
        List<film> films = filmService.AllFilm();
        for (film film : films) {
            if(film.getISDN()==ISDN){
                List<film> films1 = filmService.selectfilmByISDN(ISDN);
                List<types> alltypes = typesService.Alltypes();
                model.addAttribute("films",films1);
                model.addAttribute("alltypes",alltypes);
                return "film/file_update.jsp";
            }
        }
         request.setAttribute("films1","没有该编号");
        return "forward:/modfilm";
    }

    @RequestMapping("/sfByD")
    public String selectfilmByDir(String director,Model model){
        List<film> films1 = filmService.selectfilmByDir("%"+director+"%");
        if(films1!=null) {
            List<types> alltypes = typesService.Alltypes();
            model.addAttribute("films", films1);
            model.addAttribute("alltypes", alltypes);
            return "film/file_update.jsp";
        }else {
            request.setAttribute("films1","没有相似导演");
            return "forward:/modfilm";
        }


    }

    @RequestMapping("/sfByT")
    public String selectfilmBytype(String type,Model model){
        List<film> films = filmService.AllFilm();
        for (film film : films) {
            if(film.getType().equals(type)){
                List<film> films1 = filmService.selectfilmBytype(type);
                List<types> alltypes = typesService.Alltypes();
                model.addAttribute("films",films1);
                model.addAttribute("alltypes",alltypes);
                return "film/file_update.jsp";
            }
        }
        request.setAttribute("films1","没有对应类型的电影");
        return "forward:/modfilm";
    }

    @RequestMapping("/sfByi")
    public String selectfilmByI(int ISDN,Model model){
        List<film> films = filmService.AllFilm();
        System.out.println(ISDN);
        for (film film : films) {
            if(film.getISDN()==ISDN){
                List<film> films1 = filmService.selectfilmByISDN(ISDN);
                model.addAttribute("allfilms",films1);
                return "film/Film_pre.jsp";
            }
        }
        return "forward:/allfilm";
    }



}

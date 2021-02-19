package com.zc.Service;

import com.zc.pojo.film;

import java.util.List;

/**
 * @author MoYu-zc
 * @date 2020/12/18 16:39
 */
public interface FilmService {
    /**
     *   查找全部电影
     * @return
     */
    public List<film> AllFilm();

    /**
     * 通过ISDN查电影
     * @param ISDN
     * @return
     */
    public List<film> selectfilmByISDN(int ISDN);

    /**
     * 通过导演查电影
     * @param director
     * @return
     */
    public List<film> selectfilmByDir(String director);

    /**
     *  通过类型查电影
     * @param type
     * @return
     */
    public List<film> selectfilmBytype(String type);

    /**
     * 添加电影
     * @param film
     * @return
     */
    public int AddFilm(film film);

    /**
     * 修改电影
     * @param film
     * @return
     */
    public int upFilm(film film);

    /**
     * 通过ISDN 删除电影
     * @param ISDN
     * @return
     */
    public int DelFilm(int ISDN);
}

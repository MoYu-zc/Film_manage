package com.zc.Service;

import com.zc.Dao.FilmMapper;
import com.zc.pojo.film;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author MoYu-zc
 * @date 2020/12/18 16:39
 */
@Service
public class FilmServiceimpl implements FilmService {

    @Autowired
    private FilmMapper filmMapper;

    public List<film> AllFilm() {
        return filmMapper.AllFilm();
    }

    public List<film> selectfilmByISDN(int ISDN) {
        return filmMapper.selectfilmByISDN(ISDN);
    }

    public List<film> selectfilmByDir(String director) {
        return filmMapper.selectfilmByDir(director);
    }

    public List<film> selectfilmBytype(String type) {
        return filmMapper.selectfilmBytype(type);
    }

    public int AddFilm(film film) {
        return filmMapper.AddFilm(film);
    }

    public int upFilm(film film) {
        return filmMapper.upFilm(film);
    }

    public int DelFilm(int ISDN) {
        return filmMapper.DelFilm(ISDN);
    }
}

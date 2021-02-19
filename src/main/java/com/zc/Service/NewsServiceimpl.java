package com.zc.Service;

import com.zc.Dao.NewsMapper;
import com.zc.pojo.news;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author MoYu-zc
 * @date 2020/12/17 23:56
 */
@Service
public class NewsServiceimpl implements NewsService{

    @Autowired
    private NewsMapper newsMapper;

    public news selectNewById(int ISDN) {
        return newsMapper.selectNewById(ISDN);
    }

    public List<news> Allnews() {
        return newsMapper.Allnews();
    }

    public int addNew(news news) {
        return newsMapper.addNew(news);
    }

    public int upNew(news news) {
        return newsMapper.upNew(news);
    }

    public int DelnewById(int ISDN) {
        return newsMapper.DelnewById(ISDN);
    }
}

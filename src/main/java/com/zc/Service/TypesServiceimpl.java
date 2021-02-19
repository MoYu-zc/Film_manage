package com.zc.Service;

import com.zc.Dao.TypesMapper;
import com.zc.pojo.types;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author MoYu-zc
 * @date 2020/12/16 21:00
 */
@Service
public class TypesServiceimpl  implements TypesService{

    @Autowired
   private TypesMapper typesMapper;

    public types selectTypeByID(int id) {
        return typesMapper.selectTypeByID(id);
    }

    public List<types> Alltypes() {
        return typesMapper.Alltypes();
    }

    public int DeletetypeById(int id) {
        return typesMapper.DeletetypeById(id);
    }

    public int Updatetype(types types) {
        return typesMapper.Updatetype(types);
    }

    public int addtype(types types) {
        return typesMapper.addtype(types);
    }
}

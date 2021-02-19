package com.zc.Service;

import com.zc.Dao.UserMapper;
import com.zc.pojo.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author MoYu-zc
 * @date 2020/12/15 19:49
 */
@Service
public class UserServiceimpl implements UserService{

    @Autowired
    private UserMapper userMapper;

    public List<user> getUserList() {
        return userMapper.getUserList();
    }

    public int insertUser(user user) {
        return userMapper.insertUser(user);
    }

    public int upUser(user user) {
        return userMapper.upUser(user);
    }

    public int uppaw(user user) {
        return userMapper.uppaw(user);
    }

    public user getUserById(int id) {
        return userMapper.getUserById(id);
    }


//    public void setUserMapper(UserMapper userMapper) {
//      this.userMapper=userMapper;
//    }
}

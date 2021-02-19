package com.zc.Dao;

import com.zc.pojo.user;

import java.util.List;

/**
 * @author MoYu-zc
 * @date 2020/12/14 11:18
 */
public interface UserMapper {

    /**
     * 获取用户列表
     * @return
     */
    public List<user> getUserList();

    /**
     * id查用户
     * @return
     */
    public user getUserById(int id);

    /**
     *  添加用户
     * @param user
     * @return
     */
   public int insertUser(user user);

    /**
     * 修改用户个人信息
     * @return
     */
   public int upUser(user user);

    /**
     * 修改密码
     * @param user
     * @return
     */
   public int uppaw(user user);
}

package com.zc.Service;

import com.zc.pojo.user;

import java.util.List;

/**
 * @author MoYu-zc
 * @date 2020/12/15 19:49
 */
public interface UserService {

   public   List<user> getUserList();

   public int insertUser(user user);

   public int upUser(user user);

   public int uppaw(user user);

   public user getUserById(int id);
}

package com.zc.pojo;

/**
 * @author MoYu-zc
 * @date 2020/12/14 11:15
 */
public class user {
    private Integer id;
    private String username;
    private String paw;
    private Integer tele;
    private String email;


    public user() {
    }



    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPaw() {
        return paw;
    }

    public void setPaw(String paw) {
        this.paw = paw;
    }

    public Integer getTele() {
        return tele;
    }

    public void setTele(Integer tele) {
        this.tele = tele;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "user{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", paw='" + paw + '\'' +
                ", tele=" + tele +
                ", email='" + email + '\'' +
                '}';
    }

    public user(Integer id, String username, String paw, Integer tele, String email) {
        this.id = id;
        this.username = username;
        this.paw = paw;
        this.tele = tele;
        this.email = email;
    }
}

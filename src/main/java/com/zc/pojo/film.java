package com.zc.pojo;



/**
 * @author MoYu-zc
 * @date 2020/12/16 17:52
 */
public class film {
    private Integer ISDN;
    private String name;
    private String director;
    private String actor;
    private String type;
    private String country;
    private String language;
    private Double score;
    private String photo;
    private String href;
    private String description;

    @Override
    public String toString() {
        return "film{" +
                "ISDN=" + ISDN +
                ", name='" + name + '\'' +
                ", director='" + director + '\'' +
                ", actor='" + actor + '\'' +
                ", type='" + type + '\'' +
                ", country='" + country + '\'' +
                ", language='" + language + '\'' +
                ", score=" + score +
                ", photo='" + photo + '\'' +
                ", href='" + href + '\'' +
                ", description='" + description + '\'' +
                '}';
    }

    public Integer getISDN() {
        return ISDN;
    }

    public void setISDN(Integer ISDN) {
        this.ISDN = ISDN;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getActor() {
        return actor;
    }

    public void setActor(String actor) {
        this.actor = actor;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getHref() {
        return href;
    }

    public void setHref(String href) {
        this.href = href;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public film() {
    }

    public film(Integer ISDN, String name, String director, String actor, String type, String country, String language, Double score, String photo, String href, String description) {
        this.ISDN = ISDN;
        this.name = name;
        this.director = director;
        this.actor = actor;
        this.type = type;
        this.country = country;
        this.language = language;
        this.score = score;
        this.photo = photo;
        this.href = href;
        this.description = description;
    }
}

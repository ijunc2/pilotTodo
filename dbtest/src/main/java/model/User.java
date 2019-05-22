package model;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

public class User {

    private Integer id;

    private String name;

    private Date insertedDate = new Date();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getInsertedDate() {
        return insertedDate;
    }

    public void setInsertedDate(Date insertedDate) {
        this.insertedDate = insertedDate;
    }
}

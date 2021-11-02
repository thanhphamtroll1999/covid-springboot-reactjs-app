package me.ifi.CovidWebSpring.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "patient")
@Data
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "date_of_birth")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateOfBirth;

    @Column(name = "gender")
    private String gender;

    @Column(name = "age")
    private int age;

    @Column(name = "address")
    private String address;

    @Column(name = "status")
    private String status;

    @Column(name = "area")
    private String area;

    @Column(name = "date_discovered")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date discoveredDate;

    @Column(name = "avatar")
    private String avatar;

    public Patient() {
    }

    public Patient(long id, String name, Date dateOfBirth, String gender, int age, String address, String status, String area, Date discoveredDate, String avatar) {
        this.id = id;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.age = age;
        this.address = address;
        this.status = status;
        this.area = area;
        this.discoveredDate = discoveredDate;
        this.avatar = avatar;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", gender='" + gender + '\'' +
                ", age=" + age +
                ", address='" + address + '\'' +
                ", status='" + status + '\'' +
                ", area='" + area + '\'' +
                ", discoveredDate=" + discoveredDate +
                ", avatar='" + avatar + '\'' +
                '}';
    }
}

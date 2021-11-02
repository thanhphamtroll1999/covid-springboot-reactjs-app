package me.ifi.CovidWebSpring.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name = "travel_schedule")
public class MovingSchedule {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "moving_schedule")
    private String movingSchedule;

    @Column(name = "time_moving")
    private Date timeMove;
}

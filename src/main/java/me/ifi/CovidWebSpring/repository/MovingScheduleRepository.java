package me.ifi.CovidWebSpring.repository;

import me.ifi.CovidWebSpring.model.MovingSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovingScheduleRepository extends JpaRepository<MovingSchedule, Long> {
}

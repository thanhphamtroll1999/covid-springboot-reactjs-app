package me.ifi.CovidWebSpring.repository;

import me.ifi.CovidWebSpring.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    Patient findPatientById(long id);

    @Query("select p from Patient p where concat(p.name, ' ', p.gender, ' ', p.age, ' ', p.address, ' ', p.status, ' ', p.discoveredDate, ' ', p.area) like %?1% ")
    List<Patient> search(String keyword);
}

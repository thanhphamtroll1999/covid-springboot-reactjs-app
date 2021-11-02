package me.ifi.CovidWebSpring.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.ifi.CovidWebSpring.model.Patient;
import me.ifi.CovidWebSpring.repository.PatientRepository;
import me.ifi.CovidWebSpring.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    PatientRepository patientRepository;

    @Override
    public List<Patient> getListPatients() {
        List<Patient> patientList = patientRepository.findAll();
        try {
            avatarArr(patientList);
            return patientList;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void deleteSelectedPatient(long id) {
        patientRepository.deleteById(id);
    }

    @Override
    public void createNewPatient(Patient patient) {
        File file1 = new File(new SimpleDateFormat("yyyy-mm-dd").format(new Date()) + ".json");
        try (FileWriter file = new FileWriter(file1)) {
            String jsonStr = patient.getAvatar();
            file.write(jsonStr);
        } catch (IOException e) {
            e.printStackTrace();
        }

        patient.setAvatar(file1.getAbsolutePath());
        patientRepository.save(patient);
    }

        @Override
    public void updatePatient(long id, Patient patientUpdate) {
        Patient patient = patientRepository.findPatientById(id);
        if(patient != null){
            patient.setName(patientUpdate.getName());
            patient.setDateOfBirth(patientUpdate.getDateOfBirth());
            patient.setGender(patientUpdate.getGender());
            patient.setAge(patientUpdate.getAge());
            patient.setAddress(patientUpdate.getAddress());
            patient.setStatus(patientUpdate.getStatus());
            patient.setDiscoveredDate(patientUpdate.getDiscoveredDate());
            patient.setArea(patientUpdate.getArea());
            patientRepository.save(patient);
        }else patientRepository.save(patientUpdate);

    }

    @Override
    public Patient getPatientById(long id) {
        return patientRepository.findPatientById(id);
    }

    @Override
    public List<Patient> getListPatientsSearch(String keyword) {
        return patientRepository.search(keyword);
    }

    @Override
    public List<Patient> avatarArr(List<Patient> list) throws IOException {
        for(Patient p : list){
            String url = p.getAvatar();

            FileReader fileReader = new FileReader(url);
            BufferedReader br = new BufferedReader(fileReader);
            String avatar = br.readLine();
            p.setAvatar(avatar);
        }
        return list;
    }
}

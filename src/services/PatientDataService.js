import http from '../common/http-common';

 const PATIENT_API_BASE_URL = "http://localhost:8080/api"

class PatientDataService{
    getAll() {
        return http.get(PATIENT_API_BASE_URL+"/patients");
      }
    get(id) {
      return http.get( PATIENT_API_BASE_URL+`/${id}`);
    }
  
    create(data) {
      return http.post(PATIENT_API_BASE_URL+"/create", data);
    }
  
    update(id, data) {
      return http.put(PATIENT_API_BASE_URL+`/patients/${id}`, data);
    }
  
    delete(id) {
      return http.delete(PATIENT_API_BASE_URL+ `/patients/${id}`);
    }

    searchPatients(keywords){
      return http.get(PATIENT_API_BASE_URL+ `/patients/search/${keywords}`);
    }
}

export default new PatientDataService();
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import PatientDataService from '../services/PatientDataService';
import InputComponent from './InputComponent';
import EditComponent from './EditComponent';
import ExportExcelComponent from './ExportExcelComponent';
import SearchPatientComponent from './SearchPatientComponent';
import '../resources/style.css';

class PatientListComponent extends React.Component{
    constructor(){
        super();
        this.state ={
            patients: [],
            patient: {},
            keywords: '',
            showItemEdit: false,
            showItemDelete: false
        }
    }

    componentDidMount(){
        if(this.state.keywords == ''){
            PatientDataService.getAll().then((response) => this.setState({ patients: response.data }))
        }
        else PatientDataService.searchPatients(this.state.keywords).then((response) => this.setState({ patients: response.data}))
       
    }

    handleEdit(patient){
        const newPatientId = patient.id;
        console.log(newPatientId);
    }

    handleDelete(row){
        const newsId = row.id;
        console.log(newsId);
        const patients = this.state.patients.filter(i => i.id !== row.id)
        this.setState({patients});
        PatientDataService.delete(newsId)
    }

    render() {
        console.log(this.state)
        return (
        <div class="container-fluid" >   
            <div class="container">
                <InputComponent/>       
                <br></br>
                <div id="data-table">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <span className="navbar-brand" ><h3>List of patients</h3></span>
                        <SearchPatientComponent/>
                        {/* <form>
                            <div class="input-group">
                                <div class="form-outline">
                                    <input type="text" id="form1" class="form-control" placeholder="search..." onChange = {this.onSearchChange}/>
                                </div>
                                <button type="button" class="btn btn-primary" onClick={this.onSearch}>
                                    Search
                                </button>
                            </div>
                        </form> */}
                    </nav>
                    <table class="table table-striped table-sm table-bordered" id="patientTable" width="100%" >
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Date of birth</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Discovered Date</th>
                                <th>Area</th>
                                <th>Avatar</th>
                                <th >Action</th>         
                            </tr>  
                        </tbody>
                        <tbody>
                            {
                            this.state.patients.map(
                                patient =>
                                <tr key={patient.id} >
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.dateOfBirth}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.address}</td>
                                    <td>{patient.status}</td>
                                    <td>{patient.discoveredDate}</td>
                                    <td>{patient.area}</td>
                                    <td><img src={patient.avatar} alt="avatar" width="50px" height="50px"></img></td>
                                    <td>
                                        <EditComponent patient={patient}/>
                                        <button class="btn btn-info" type="button" onClick={() => this.handleDelete(patient)}>Delete</button>
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
               
            </div>    
        </div>   
        )
    }
}

export default PatientListComponent;
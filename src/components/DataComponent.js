import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import PatientDataService from '../services/PatientDataService';

class DataComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
            patient: {},
        }
    }
    componentDidMount() {
        //initialize datatable
        PatientDataService.getAll().then((response) => this.setState({ patients: response.data }))
        $(document).ready(function () {
            $('#example').DataTable();
        });
    }
    render() {
        return(
            <table id="example" class="display">
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
                                    
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
        )
    }
}

export default DataComponent;
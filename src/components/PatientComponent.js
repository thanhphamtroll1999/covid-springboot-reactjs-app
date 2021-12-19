import React from "react";
class PatientComponent extends React.Component {
    constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		this.props.onDelete(this.props.employee);
	}
    render() {
        return(
            <div class="container">                     
                <h2 >List of patients</h2>
                <table class="table table-striped" width="100%">
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
                        </tr>  
                    </tbody>
                    <tbody>
                        {
                        this.state.patients.map(
                            patients =>
                            <tr key={patients.id} onClick={this.handle}>
                                <td>{patients.id}</td>
                                <td>{patients.name}</td>
                                <td>{patients.dateOfBirth}</td>
                                <td>{patients.gender}</td>
                                <td>{patients.age}</td>
                                <td>{patients.address}</td>
                                <td>{patients.status}</td>
                                <td>{patients.discoveredDate}</td>
                                <td>{patients.area}</td>
                                <td><button type="button"></button></td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>       
        )
    }
}

export default PatientComponent;
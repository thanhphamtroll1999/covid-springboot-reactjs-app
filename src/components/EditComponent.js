import React from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import PatientDataService from '../services/PatientDataService'
import '../resources/style.css'
import UploadImage from './UploadImage'

class EditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal : false,
            patient : this.props.patient,
            errors : {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }  

    handleChange(e) {
        const {name,value} = e.target
        this.setState({
            patient: {...this.state.patient,[name] : value}
        })
       }

       handleValidation(){
        let fields = this.state.patient;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }
        // if (typeof fields["name"] !== "undefined") {
        //     if (!fields["name"].match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false;
        //         errors["name"] = "Only letters";
        //     }   
        // }
        if (!fields["dateOfBirth"]) {
            formIsValid = false;
            errors["dateOfBirth"] = "Cannot be empty";
        }
        if (!fields["gender"]) {
            formIsValid = false;
            errors["gender"] = "Cannot be empty";
        }
        if (!fields["age"]) {
            formIsValid = false;
            errors["age"] = "Cannot be empty";
        }
        if (!fields["address"]) {
            formIsValid = false;
            errors["address"] = "Cannot be empty";
        }
        if (!fields["status"]) {
            formIsValid = false;
            errors["status"] = "Cannot be empty";
        }
        if (!fields["discoveredDate"]) {
            formIsValid = false;
            errors["discoveredDate"] = "Cannot be empty";
        }
        if (!fields["area"]) {
            formIsValid = false;
            errors["area"] = "Cannot be empty";
        }
        this.setState({ errors: errors });
        return formIsValid;
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            alert("Form submitted");
            const {name, dateOfBirth, gender, age, address, status, discovered, area } = this.state.patient	;
            PatientDataService.update(this.state.patient.id, this.state.patient);
          } else {
            alert("Form has errors.");
          }
    }

    showModalHandler = (event) =>{
        this.setState({showModal: true});
    }
    hideModalHandler = (event) =>{
        this.setState({showModal:false});
    }

    render() {
        return (
        <>
            <Button variant="primary" onClick={this.showModalHandler}>
                Edit
            </Button>

            <Modal
                show={this.state.showModal}
                onHide={this.hideModalHandler}
            >
                <Modal.Header closeButton>
                <Modal.Title class="info"><h3>Edit patient</h3></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit = {this.handleSubmit}>
                    <div class="row">
                        <div class="col-sm-8">
                            <table>
                                <tbody>                    
                                        <tr>
                                            <td><lable>Name</lable> </td>
                                            <td>
                                                <input type="text" value={this.state.patient.name} name="name" 
                                                        onChange ={this.handleChange}>
                                                </input> 
                                            </td>                             
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>  <span><i>{this.state.errors["name"]}</i></span></td>
                                        </tr>    
                                        <tr>
                                        <td><lable class="group-label" for="date-of-birth">Date Of Birth</lable></td>
                                        <td>
                                            <input 
                                                type="date" id="dateOfBirth" 
                                                value={this.state.patient.dateOfBirth} 
                                                name="dateOfBirth" 
                                                onChange ={this.handleChange}>
                                            </input>
                                        </td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>  <span><i>{this.state.errors["dateOfBirth"]}</i></span></td>
                                        </tr>  
                                        <tr>
                                            <td><lable class="group-label" for="gender">Gender</lable></td>
                                            <td>                                   
                                                <input type="radio" id="male" name="gender" value='Nam' onChange={this.handleChange}></input>              
                                                <label for="male">Nam</label>
                                                <input type="radio" id="female" name="gender" value='Nữ' onChange={this.handleChange}></input>
                                                <label for="female">Nữ</label>                                          
                                            </td>
                                        </tr>                                    
                                        <tr>
                                            <td><lable class="group-label" for="age">Age</lable></td>
                                            <td><input type="text" id="age" value={this.state.patient.age} name="age" onChange ={this.handleChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>  <span><i>{this.state.errors["age"]}</i></span></td>
                                        </tr>  
                                        <tr>
                                        <td><label class="group-label" for="address">Address</label></td>
                                        <td><input type="text" id="address"  value={this.state.patient.address} name="address" onChange ={this.handleChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>  <span><i>{this.state.errors["address"]}</i></span></td>
                                        </tr>  
                                        <tr>
                                            <td><label class="group-label" for="status">Status</label></td>
                                            <td>
                                                <select id="status" value={this.state.patient.status} name="status" onChange ={this.handleChange}>
                                                <option value="F0">F0</option>
                                                <option value="F1">F1</option>
                                                <option value="F2">F2</option>
                                                <option value="F3">F3</option>
                                                </select>
                                            </td>
                                        </tr>                                
                                        <tr>
                                            <td><label class="group-label" for="discovered-date">Discovered Date</label></td>
                                            <td><input type="date" id="discovered-date" value={this.state.patient.discoveredDate} name="discoveredDate" onChange ={this.handleChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>  <span ><i>{this.state.errors["discoveredDate"]}</i></span></td>
                                        </tr>  
                                        <tr>
                                            <td><label class="group-label" for="area-status">Area Status</label></td>
                                            <td><input type="option" id="area-status" value={this.state.patient.area} name="area" onChange ={this.handleChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>  <span ><i>{this.state.errors["area"]}</i></span></td>
                                        </tr>                              
                                </tbody>                               
                            </table>                           
                        </div>
                        <div class="col-sm-4" id="col2">
                            <UploadImage avatar={this.state.patient.avatar}/>
                        </div>
                    </div>
                    <div class="row" >
                        <div id="action-btn">
                        <button class="btn-submit" class="btn btn-info" type ="submit" >Save change</button>
                        </div>
                    </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.hideModalHandler}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
       </>
    );
    }
}
export default EditComponent;
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import PatientDataService from '../services/PatientDataService';
import '../resources/style.css';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
import ExportDocx from './ExportDocx';
import { saveAs } from 'file-saver';
import * as docx from "docx";
import { Document, Packer, Paragraph, Table, TableCell, TableRow, WidthType } from "docx";

class InputComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={    
            patient: {
                "id" : '',
                "name": '',
                "dateOfBirth": '',
                "gender": '',
                "age": '',
                "address": '',
                "status": '',
                "discoveredDate": '',
                "area" : '',
                "avatar": ''
            },
            errors: {}
        
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this); 
        this.onImageChange = this.onImageChange.bind(this);
    }

    componentDidMount(){
        this.setState({patient : {
            "id" : '',
            "name": '',
            "dateOfBirth": '',
            "gender": '',
            "age": '',
            "address": '',
            "status": '',
            "discoveredDate": '',
            "area" : '',
            "avatar": ''
        }})
    }

    handleChange(e) {
        const {name,value} = e.target
        this.setState({
            patient: {...this.state.patient,[name] : value}
        })
    }

    onImageChange = async  (event) => {
        console.log(event.target.files[0])
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            const base64 = await this.convertBase64(file)
            this.setState({
                patient : {...this.state.patient, avatar : base64},
            });
        }
    };

    convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
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
  
    handleExportDocx(){
        <ExportDocx/>
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            alert("Form submitted");
            const {name, dateOfBirth, gender, age, address, status, discovered, area, avatar } = this.state.patient	;
            PatientDataService.create(this.state.patient).then((res) => {
                    this.setState({ patients: res.data });
                })
        }else {
            alert("Form has errors.");
        }
    }
    
    render() {
        console.log(this.state)
        return (
            <div class="container" id="form-input">
                <h3 class="info" >Patient Infomation</h3>
                <form onSubmit = {this.handleSubmit}>
                    <div class="row">
                        <div class="col-sm-6">
                            <table width="100%">
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
                                            <td>  <span style={{ color: "red" }}><i>{this.state.errors["name"]}</i></span></td>
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
                                            <td>  <span style={{ color: "red" }}><i>{this.state.errors["dateOfBirth"]}</i></span></td>
                                        </tr>  
                                        <tr>
                                            <td><lable class="group-label" for="gender">Gender</lable></td>
                                            <td>                                                                             
                                                <input type="radio" id="male" name="gender" value="Nam" checked={this.state.patient.gender === "Nam"} onChange={this.handleChange} ></input>              
                                                <label>Nam</label>
                                                <input type="radio" id="female" name="gender" value="Nữ" checked={this.state.patient.gender === "Nũ"} onChange={this.handleChange} ></input>
                                                <label>Nữ</label>   
                                            </td>
                                        </tr>                                    
                                        <tr>
                                            <td><lable class="group-label" for="age">Age</lable></td>
                                            <td><input type="text" id="age" value={this.state.patient.age} name="age" onChange ={this.handleChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>  <span style={{ color: "red" }}><i>{this.state.errors["age"]}</i></span></td>
                                        </tr>  
                                        <tr>
                                        <td><label class="group-label" for="address">Address</label></td>
                                        <td><input type="text" id="address"  value={this.state.patient.address} name="address" onChange ={this.handleChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>  <span style={{ color: "red" }}><i>{this.state.errors["address"]}</i></span></td>
                                        </tr>  
                                        <tr>
                                            <td><label class="group-label" for="status">Status</label></td>
                                            <td>
                                                <select id="status" value={this.state.patient.status} name="status" onChange ={this.handleChange}>
                                                <option value="status" selected>status</option>
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
                                            <td>  <span style={{ color: "red" }}><i>{this.state.errors["discoveredDate"]}</i></span></td>
                                        </tr>  
                                        <tr>
                                            <td><label class="group-label" for="area-status">Area Status</label></td>
                                            <td><input type="option" id="area-status" value={this.state.patient.area} name="area" onChange ={this.handleChange}></input></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>  <span style={{ color: "red" }}><i>{this.state.errors["area"]}</i></span></td>
                                        </tr>                              
                                </tbody>                               
                            </table>                           
                        </div>
                        <div class="col-sm-3" id="col2"> 
                            <img src={this.state.patient.avatar} alt="Avatar" width="200px" height="200px"></img>
                            <input type="file" id="upload" onChange={this.onImageChange} /> 
                        </div>
                        <div class="col-sm-3" id="col3">
                            <div >  
                                <ReactHTMLTableToExcel  
                                    className="btn btn-info"  
                                    table="patientTable"  
                                    filename="ExportExcel"  
                                    sheet="Sheet"  
                                    buttonText="Export excel" 
                                    style="left:50%"
                                />  
                            </div>  
                            <div>
                                <button class="btn btn-info" id="export" type="button" onChange ={this.handleExportDocx}>Export Docx</button>
                            </div> 
                        </div>
                    </div>
                    
                    <br></br>
                    <div class="row" >
                        <div id="action-btn">
                        <button class="btn-submit" class="btn btn-secondary" type ="submit" onClick={this.addPatient} >Add new patient</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default InputComponent;
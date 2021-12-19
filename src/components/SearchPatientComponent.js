import React, { Component} from 'react';
import PatientService from '../services/PatientDataService';

class SearchPatientComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: this.props.keywords,
            patients: this.props.patients,
        }
        this.onSearch = this.onSearch.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    onSearch = (event) => {
        event.preventDefault();
        if(this.state.keywords == ''){
            PatientService.getPatients().then((res) => {
                this.setState({ patients: res.data });
                console.log(res);
            })
        }
        else{
            PatientService.searchPatients(this.state.keywords).then(res => {
                this.setState({patients: res.data});
            })
        }
    }

    onSearchChange = (event) => {
        this.setState({ keywords : event.target.value });
    }

    render() {
        console.log(this.state)
        return (
            <form>
                <div class="input-group">
                    <div class="form-outline">
                        <input type="text" id="form1" class="form-control" placeholder="search..." onChange = {this.onSearchChange}/>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.onSearch}>Search</button>
                </div>
            </form>
        )
    }
}

export default SearchPatientComponent;
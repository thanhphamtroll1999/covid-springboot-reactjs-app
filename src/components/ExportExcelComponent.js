import React from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';  
class ExportExcelComponent extends React.Component {
    render() {
        return (
            <div >  
                <ReactHTMLTableToExcel  
                    className="btn btn-info"  
                    table="patientTable"  
                    filename="ExportExcel"  
                    sheet="Sheet"  
                    buttonText="Export excel" 
                />  
            </div> 
        );
    }
}

export default ExportExcelComponent;
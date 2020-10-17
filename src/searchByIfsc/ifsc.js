import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Grid from 'react-bootstrap';
import ReactTable from "react-table";  
// import DataGrid from './datagrid/dataGrid.js';
import Table from 'react-bootstrap/Table';
import { AgGridReact } from 'ag-grid-react';
import Navigation from './../navigation.js'

export default class Ifsc extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.textInput = React.createRef(); 
        this.state = {
            bankDetails: {
              address: '',
              bank_id: '',
              bank_name: '',
              branch: '',
              city: '',
              district: '',
              ifsc: '',
              state: '',
            },
            columnDefs: [
                {headerName: 'address', field: 'address'},
                {headerName: 'bank_id', field: 'bank_id'},
                {headerName: 'bank_name', field: 'bank_name'}

            ],
        };
        // this.handleClick = this.handleClick.bind(this);

    }

    handleClick = () => {
        console.log("I have been clicked", this.textInput.current.value, this.textInput.current.value.length);
        axios.post('https://cors-anywhere.herokuapp.com/https://aqueou016s.herokuapp.com/ifsc', {
            ifsc: this.textInput.current.value,
          })
          .then((response) => {
            // this.state.bankDetails = response.data;
            if(response.data.length>0 && response.data[0].address===undefined) {
                console.log("data not found");
                this.clearClick();
                alert("No data found!Please use bankDetails service to get persisted bank details and then try ifsc.Database has been trimmed on server due to limited space");
            } else {
                this.setState({ bankDetails: response.data[0]});
                console.log('bank', this.state);
                // this.setState({ tableData: response.data.tableData });
            }
          })
          .catch((error)  => {
            console.log('Error', error);
            // alert("Not Found");
            alert("Error Occurred!");
          });

    }

    clearClick = () => {
        this.setState({bankDetails: {
            address: '',
            bank_id: '',
            bank_name: '',
            branch: '',
            city: '',
            district: '',
            ifsc: '',
            state: '',
          }});
        this.textInput.current.value = '';
    }
    render() {
        return(
            <div>
                <Navigation></Navigation>
                <Form>
                    <Form.Group as={Row} controlId="formGridIfsc">
                        <Form.Label column sm={5}>
                        Enter IFSC: 
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control type="text" ref={this.textInput} placeholder="Enter ISFC here.." />
                        </Col>
                        <Row>
                            <Col>
                                <Button variant="primary" onClick={this.handleClick}>Submit</Button>   
                            </Col>
                            <Col>
                                <Button variant="primary" onClick={this.clearClick}>Clear</Button>
                            </Col> 
                        </Row>
                    </Form.Group>
                </Form>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Bank Id</th>
                            <th>Branch Name</th>
                            <th>IFSC</th>
                            <th>Bank Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.bankDetails.bank_id}</td>
                            <td>{this.state.bankDetails.branch}</td>
                            <td>{this.state.bankDetails.ifsc}</td>
                            <td>{this.state.bankDetails.bank_name}</td>
                            <td>{this.state.bankDetails.city}</td>
                            <td>{this.state.bankDetails.state}</td>
                            <td>{this.state.bankDetails.address}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
        
    }
}


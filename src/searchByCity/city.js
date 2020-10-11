import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Navigation from './../navigation.js';

export default class City extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.cityTextInput = React.createRef(); 
        this.nameTextInput = React.createRef(); 
        this.state = {
            bankDetails: [{
              address: '',
              bank_id: '',
              bank_name: '',
              branch: '',
              city: '',
              district: '',
              ifsc: '',
              state: '',
            }]
        }
    }

    handleClick = () => {
        // console.log("I have been clicked", this.textInput.current.value, this.textInput.current.value.length);
        axios.post('https://cors-anywhere.herokuapp.com/https://aqueou016s.herokuapp.com/bankDetails', {
            city: this.cityTextInput.current.value,
            bank: this.nameTextInput.current.value,
          })
          .then((response) => {
            // this.state.bankDetails = response.data;
            if(response.data==="No data found!Database has been trimmed due to limited space on server") {
                alert("No data found!Database has been trimmed due to limited space on server");
            } else {
                this.setState({ bankDetails: response.data});
                console.log('city', this.state);
                // this.setState({ tableData: response.data.tableData });
            }
          })
          .catch((error)  => {
            console.log('Error', error);
            // alert("Not Found");
          });

    }

    clearClick = () => {
        this.setState({bankDetails: [{
            address: '',
            bank_id: '',
            bank_name: '',
            branch: '',
            city: '',
            district: '',
            ifsc: '',
            state: '',
          }]});
        this.cityTextInput.current.value = '';
        this.nameTextInput.current.value = '';
    }
      
    renderData(item, index) {
        if(item.length ==0) {
            return "No data found";
        }
        return (
          <tr key={index}>
            <td>{item.bank_id}</td>
            <td>{item.branch}</td>
            <td>{item.ifsc}</td>
            <td>{item.bank_name}</td>
            <td>{item.city}</td>
            <td>{item.state}</td>
            <td>{item.address}</td>
          </tr>
        )
      }

    render() {
        return(
            <div>
                <Navigation></Navigation>
                <Form>
                    <Form.Group as={Row} controlId="formGridCity">
                        <Form.Label column sm={5}>
                        Enter City: 
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control type="text" ref={this.cityTextInput} placeholder="Enter city here.." />
                        </Col>
                        <Form.Label column sm={5}>
                        Enter Bank Name:  
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control type="text" ref={this.nameTextInput} placeholder="Enter bank name here.." />
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
                {/* {(() => {
                    return (
                        <div>
                            {this.state.bankDetails.length > 0 ? ( 
                            <div> */}
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
                                        {/* {this.state.value == 'news'? <Text>data</Text>: null } */}
                                        {this.state.bankDetails.map(this.renderData)}
                                    </tbody>
                                </Table> 
                            {/* </div> )
                            :
                            null }
                        </div>
                    );
                })} */}
            </div>
        );
        
    }
}
import React from 'react';
import { Button } from 'react-bootstrap';
import ReactTable from "react-table";  
import Navigation from './../navigation.js';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class FixedDeposit extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
        this.amountInput = React.createRef(); 
        this.rateInput = React.createRef(); 
        this.timeInput = React.createRef(); 
        this.totalOutput = React.createRef(); 
    }

    handleClick = () => {
        var amount  = this.amountInput.current.value;
        var rate = this.rateInput.current.value;
        var time = this.timeInput.current.value;
        var total = amount;
        total = Number(amount) + Number((amount * rate * time)/100);
        this.totalOutput.current.value = total;
    }

    clearClick = () => {
        this.totalOutput.current.value = '';
        this.amountInput.current.value = '';
        this.rateInput.current.value = '';
        this.timeInput.current.value = '';
    }
    render() {
        return(
            <div>
                <Navigation></Navigation>
                <Form>
                    <Form.Group as={Row} controlId="formGridIfsc">
                        <Form.Label column sm={5}>
                            Enter Amount: 
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" ref={this.amountInput} placeholder="Enter amount in rupees here.." />
                        </Col>
                        <Form.Label column sm={5}>
                            Enter Rate: 
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" ref={this.rateInput} placeholder="Enter rate percentage here.." ></Form.Control>
                        </Col>
                        <Form.Label column sm={5}>
                            Enter Time in years: 
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" ref={this.timeInput} placeholder="Enter time in years here.." />
                        </Col>
                        <Row>
                            <Col>
                                <Button variant="primary" onClick={this.handleClick}>Calculate</Button>   
                            </Col>
                            <Col>
                                <Button variant="primary" onClick={this.clearClick}>Clear</Button>
                            </Col> 
                        </Row>
                        <Form.Label column sm={5}>
                            Amount after maturity:  
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" ref={this.totalOutput} />
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
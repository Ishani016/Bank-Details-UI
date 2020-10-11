import React from 'react';
import ReactTable from 'react-table';

export default class DataGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            bankDetails: this.props.bankDetails
        }
    } 
    render() {
        const { bankDetails } = this.state;
        return (
            <div>
                <ReactTable
                    data={bankDetails}
                    columns={[
                    {
                        Header: 'Bank Details',
                        columns: [
                            {
                                Header: 'Bank Name',
                                accessor: '{bankDetails.bank_name}',
                            }
                        ]
                    }
                ]
                }/>
            </div>
        );
    }
}

import React, { Component,Fragment } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class NewOrder extends Component {
    render() {
        
                const columns = [{
                dataField: 'id',
                text: 'Product ID'
                }, {
                dataField: 'name',
                text: 'Product Name'
                }, {
                dataField: 'price',
                text: 'Product Price'
                }];
        return (
            <Fragment>
                <BootstrapTable bootstrap4 keyField='id' data={ products } columns={ columns } pagination={ paginationFactory() } />
            </Fragment>
        )
    }
}

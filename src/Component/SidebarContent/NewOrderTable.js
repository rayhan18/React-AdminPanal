import React, { Component,Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import ReactTable from 'react-table-6'
import "react-table-6/react-table.css"
// import axios from 'axios'

export default class NewOrderTable extends Component {
  constructor(){
    super()
    this.state={
       tableData:[]
    }
  }
  //api coling data
  // componentDidMount(){
  //   axios.get('https://restcountries.eu/rest/v2/all')
  //   .then(Response=>{
  //     this.setState({tableData:Response.data})
  //   }).catch(error=>{
  //     alert(error.message)
  //   })
  // }
  render() {
   // const tableInfo=this.state.tableData
 
    
 
   const tableData=[{no:'1',name:'rayhan',quantity:'1',price:'200',img:'https://ar.wikipedia.org/wiki/%D9%85%D9%84%D9%81:Golden_star.svg'},
   {no:'1',name:'rayhan',quantity:'1',price:'200',img:'star'},
   {no:'1',name:'rayhan',quantity:'1',price:'200',img:'img.p'},
   {no:'1',name:'rayhan',quantity:'1',price:'200',img:''},
   {no:'1',name:'rayhan',quantity:'1',price:'200',img:''}];

   // api ar data table name accesssor vitor bosay dile hobe
   const colData=[{Header:'No',accessor:'no'},{Header:'Name',accessor:'name'},{Header:'Quantity',accessor:'quantity'},{Header:'Total Price',accessor:'price'},
                    {Header:'img',accessor:'img'}
   ]
   const rowStyle={
    backgroundColor: '#0a3794'
   }
    return (
      <Fragment>
        <Container>
          <Row style={rowStyle}>
            <Col className="text-white text-center">
            <ReactTable
         data={tableData}
         columns={colData}
         defaultPageSize={10}
         pageSizeOption={[5,10,15,20]}
         />
            </Col>
          </Row>
        
        </Container>
         
      </Fragment>
    )
  }
}

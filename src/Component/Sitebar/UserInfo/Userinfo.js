import React, { Component,Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import ReactTable from 'react-table-6'
import "react-table-6/react-table.css"
 import axios from 'axios'

export default class Userinfo extends Component {
  constructor(){
    super()
    this.state={
       tableData:false
    }
  }
//   api coling data
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(Response=>{
      this.setState({tableData:Response.data})
    }).catch(error=>{
      alert(error.message)
    })
  }
  componentDidUpdate(nextProps) {
    const { tableData } = this.props
    if (nextProps.tableData !== tableData) {
     if (tableData) {
        ReactTable().then(resp => this.setState({ data: resp.data }))
     }
    }
   }
// static getDerivedStateFromProps(nextProps, prevState) {
//     return {
//         tableData: nextProps.tableData,
//     };
//    }
  render() {
     
    const tableInfo=[this.state.tableData]

    
 
  
   // api ar data table name accesssor vitor bosay dile hobe
   const colData=[
     {Header:'id',accessor:'id'},
     {Header:'Name',accessor:'name'},
     {Header:'Email',accessor:'email'},
     {Header:'PhNumber',accessor:'phone'},
     {Header:'Address',accessor:'address'},
     {Header:'Location',accessor:'geo'},
     
   ]
   console.log(colData)
   const rowStyle={
    backgroundColor: '#0a3794'
   }
    return (
      <Fragment>
        <Container>
          <Row style={rowStyle}>
            <Col className="text-white text-center">
            <ReactTable 
         data={tableInfo}
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

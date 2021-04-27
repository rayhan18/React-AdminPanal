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

    
 
   const tableData=[
     {no:'1',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'2',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'3',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'4',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'5',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'6',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'7',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'8',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'9',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'10',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'11',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'12',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'13',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'14',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'15',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'16',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'17',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'18',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'19',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'20',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'21',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
     {no:'22',name:'Rayhan', email:'admin@gmail.com', phNumber:'+96605555555',address:'H-101,R-102,F-103',quantity:'1',price:'200',img:''},
  ];

   // api ar data table name accesssor vitor bosay dile hobe
   const colData=[
     {Header:'No',accessor:'no'},
     {Header:'Name',accessor:'name'},
     {Header:'Email',accessor:'email'},
     {Header:'PhNumber',accessor:'phNumber'},
     {Header:'Address',accessor:'address'},
     {Header:'Quantity',accessor:'quantity'},
     {Header:'Total Price',accessor:'price'},
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

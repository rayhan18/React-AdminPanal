import React from 'react'
import {Bar}from 'react-chartjs-2'
//https://www.npmjs.com/package/react-chartjs-2//

const VisitorRating =()=>{
  
  return (
    <div>
      <Bar
     
      data={{
        type:'Bar',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dic'],
        datasets:[
          {
            lavel:"# of votes",
            data:[80,19,3,5,2,13],
            backgroundColor:[
              'rgba(255, 190, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 190, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
          ],
          borderColor:[
            'rgba(255, 190, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 190, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderwidth:1,
          },
          {
            lavel:'Quantity',
             data:[20,5,27,20,50,10,20,53,42,18,29,48],
            backgroundColor:'orange',
            borderColor:'red'
          }
        ]
      }}
      whide={400}
      height={400}
      options={{
      maintainAspectRatio:false,
      scales:{
        yAxes:[
          {
            tick:{
              beginAtZero:true
            }
          }
        ]
        }
      }
      }
      />  
    </div>
  )
}
export default VisitorRating; 
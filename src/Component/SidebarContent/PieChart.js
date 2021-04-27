import React from 'react'
import {Pie}from 'react-chartjs-2'
//https://www.npmjs.com/package/react-chartjs-2//

const PieChart =()=>{
  
  return (
    <div>
      <Pie
     
      data={{
        type:'pie',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dic'],
        datasets:[
          {
            label: 'Bar Dataset',
            data:[80,19,3,5,2,13,20,26,49,37,53,32],
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
            lavel:'Line Dataset',
             data:[85,26,43,15,22,73,29,26,49,54,53,39],
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
export default PieChart; 
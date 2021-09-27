import React, {useEffect } from 'react'
import Charts from '../charts/Charts';
import DoughnutChart from '../charts/DoughnutChart'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader
} from '@coreui/react'
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'

export default function Insights() {
  var dashboard;
  var QuickSightEmbedding = require("amazon-quicksight-embedding-sdk");

  const [data, setdata]=React.useState([]);
  const [p_data, setp_data]=React.useState([]);

  const fetchQSDashboard = () => {
    var requestOptions = {
      method: 'GET'
    };

    fetch("https://cvzg49w5bc.execute-api.us-east-1.amazonaws.com/test-QS/qsresource-sample?mode=getUrl", requestOptions)
    .then((resp) => resp.json())
    .then((response) => {
      setdata(response.EmbedUrl)
      console.log(data)
    })
    .catch(error => console.log('error', error));
  }

  const fetchQSPrevData = () => {
    var requestOptions = {
      method: 'GET'
    };

    fetch("https://ev5we6ai81.execute-api.us-east-1.amazonaws.com/test-QS/anonymous-embed-sample2?mode=getUrl", requestOptions)
    .then((resp) => resp.json())
    .then((response) => {
      setp_data(response.EmbedUrl)
      console.log(data)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => { 
    fetchQSDashboard();
    fetchQSPrevData();
 },[])

 console.log(data)

  return (
    <div>
       <CCardGroup columns className = "cols-2">
      <CCard>
        <a href={data} target="_blank">
          <CCardHeader style={{backgroundColor:'#0A2533', color:'white'}}>
          <h3 style={{ color:'white'}}>Continuous Care</h3>
          </CCardHeader>
        </a>
        <CCardBody style={{backgroundColor:'#0A2533', color:'white'}}>
          <CChartLine
            datasets={[
              {
                label: 'Oxygen',
                backgroundColor: 'rgb(252, 133, 13)',
                color: 'rgb(0,0,0)',
                data: [80, 89, 90, 88, 106, 87, 83]
              },
              {
                label: 'Temperature',
                backgroundColor: 'rgb(10, 135, 175)',
                color: 'white',
                data: [89, 80, 100, 105, 90, 96, 85]
              }
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
          />
        </CCardBody>
      </CCard>

      <CCard>
        <a href={p_data} target="_blank">
          <CCardHeader style={{backgroundColor:'#0A2533', color:'white'}}>
          <h3 style={{ color:'white'}}>Preventive Care</h3> 
          </CCardHeader>
        </a>
        <CCardBody style={{backgroundColor:'#0A2533', color:'white'}}>
          <CChartDoughnut
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                ],
                data: [150, 200, 80]
              }
            ]}
            labels={['Low Risk', 'Medium Risk', 'High Risk']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

    </CCardGroup>
    </div>
  )
}

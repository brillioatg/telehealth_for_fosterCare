import React,{useEffect} from 'react'
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
// import { DocsLink } from 'src/reusable'

const Charts = () => {

  const [data, setdata]=React.useState([]);
  const [p_data, setp_data]=React.useState([]);
  const [q_data, setq_data]=React.useState([]);

  const fetchQSDashboard = () => {
    var requestOptions = {
      method: 'GET'
    };

    fetch("https://9mbf6pq7f9.execute-api.us-east-1.amazonaws.com/rpm-api/chart-api-1?mode=getUrl", requestOptions)
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

    fetch("https://bmd942gd86.execute-api.us-east-1.amazonaws.com/rpm-api/chart-api-2?mode=getUrl", requestOptions)
    .then((resp) => resp.json())
    .then((response) => {
      setp_data(response.EmbedUrl)
      console.log(data)
    })
    .catch(error => console.log('error', error));
  }

  const fetchQSPrevData1 = () => {
    var requestOptions = {
      method: 'GET'
    };

    fetch("https://scsfq3lsui.execute-api.us-east-1.amazonaws.com/rpm-api/chart-api-3?mode=getUrl", requestOptions)
    .then((resp) => resp.json())
    .then((response) => {
      setq_data(response.EmbedUrl)
      console.log(data)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => { 
    fetchQSDashboard();
    fetchQSPrevData();
    fetchQSPrevData1();
 },[])

  return (
    <CCardGroup columns className = "cols-2" >
      <CCard>
        <a href={data} target="_blank">
          <CCardHeader>
            <h4>Patient Demography - Bar Graph</h4>
          </CCardHeader>
        </a>
        <CCardBody>
          <p>Count of Patient by Condition</p>
          <CChartBar
            datasets={[
              {
                label: 'Condition',
                backgroundColor: '#f87979',
                data: [40, 30, 80, 50, 55, 65]
              },
              {
                label: 'Patients',
                backgroundColor: '#00D8FF',
                data: [30, 35, 180, 350, 255, 65]
              }
            ]}
            labels={['Normal Pregnancy', 'Covid 19', 'Sinusitis', 'Prediabetics', 'Fever', 'cold']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

      <CCard>
      <a href={p_data} target="_blank">
        <CCardHeader>
          <h4>Patient Care - Doughnut Chart</h4>
        </CCardHeader>
        </a>
        <CCardBody>
          <p>Count of Patients and Conditions by Risk</p>
          <CChartDoughnut
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16'
                ],
                data: [40, 20, 80, 10]
              },
              {
                label: 'Condition',
                backgroundColor: '#f87979',
                data: [40, 30, 80, 50, 55, 65]
              },
            ]}
            labels={['Low', 'Medium', 'High']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

      {/* <CCard>
        <CCardHeader>
          Line Chart
        </CCardHeader>
        <CCardBody>
          <CChartLine
            datasets={[
              {
                label: 'Data One',
                backgroundColor: 'rgb(228,102,81,0.9)',
                data: [30, 39, 10, 50, 30, 70, 35]
              },
              {
                label: 'Data Two',
                backgroundColor: 'rgb(0,216,255,0.9)',
                data: [39, 80, 40, 35, 40, 20, 45]
              }
            ]}
            options={{
              tooltips: {
                enabled: true
              }
            }}
            labels="months"
          />
        </CCardBody>
          </CCard> */}

      <CCard>
      <a href={q_data} target="_blank">
        <CCardHeader>
          <h4>Doctor Engagements - Pie Chart</h4>
        </CCardHeader>
        </a>
        <CCardBody>
          <p>Averge of Patient Age by Risk</p>
          <CChartPie
            datasets={[
              {
                backgroundColor: [
                  '#41B883',
                  '#E46651',
                  '#00D8FF',
                  '#DD1B16',
                  '#4383DE',
                  '#E54F12'
                ],
                data: [40, 60, 72, 39, 90, 40, 80]
               
              }
            ]}
            labels={['Normal Pregnancy', 'Covid 19', 'Sinusitis', 'Prediabetics', 'Fever', 'cold', 'others']}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
        </CCardBody>
      </CCard>

     {/* <CCard>
        <CCardHeader>
          Polar Area Chart
        </CCardHeader>
        <CCardBody>
          <CChartPolarArea
            datasets={[
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(179,181,198,0.2)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: 'rgba(179,181,198,1)',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: 'rgba(255,99,132,1)',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]}
            options={{
              aspectRatio: 1.5,
              tooltips: {
                enabled: true
              }
            }}
            labels={[
              'Eating', 'Drinking', 'Sleeping', 'Designing',
              'Coding', 'Cycling', 'Running'
            ]}
          />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardHeader>
          Radar Chart
        </CCardHeader>
        <CCardBody>
          <CChartRadar
            datasets={[
              {
                label: '2019',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                tooltipLabelColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
              },
              {
                label: '2020',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                tooltipLabelColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
              }
            ]}
            options={{
              aspectRatio: 1.5,
              tooltips: {
                enabled: true
              }
            }}
            labels={[
              'Eating', 'Drinking', 'Sleeping', 'Designing',
              'Coding', 'Cycling', 'Running'
            ]}
          />
        </CCardBody>
      </CCard> */}
    </CCardGroup>
  )
}

export default Charts

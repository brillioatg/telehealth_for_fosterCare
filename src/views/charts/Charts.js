import React from 'react'
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

const Charts = (props) => {
  const {data, p_data} =props;

  console.log(data)
  console.log(p_data)

  return (
    <CCardGroup columns className = "cols-2">
      <CCard>
        <a href={data}>
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
        <a href={p_data}>
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
  )
}

export default Charts

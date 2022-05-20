import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CProgress,
  CCallout,
  CCardGroup,
  CCardFooter,
  CCol,
  CLink,
  CRow,
  CWidgetProgress,
  CWidgetIcon,
  CWidgetProgressIcon,
  CWidgetSimple
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))


const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <a target="_blank" href="https://us-east-1.quicksight.aws.amazon.com/sn/accounts/923024739777/dashboards/dbb9c6ac-730d-4cb4-8e95-9c110f75c00e?directory_alias=telehealth-fostercare">
                <h3 id="traffic" className="card-title mb-0">Preventive Care</h3>
              </a>
              <div>Preventive care for the Foster children</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              {/* <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton> */}
              {/* <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup> */}
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
      <CCardGroup className="mb-4">
        <CWidgetProgressIcon
          header="50"
          text=" Scheduled Appointments"
          color="gradient-info"
          inverse
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="25"
          text="Completed Meetings"
          color="gradient-success"
          inverse
        >
          <CIcon name="cil-userFollow" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="20"
          text="Facilities"
          color="gradient-warning"
          inverse
        >
          <CIcon name="cil-basket" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="15"
          text="Care Insights"
          color="gradient-primary"
          inverse
        >
          <CIcon name="cil-chartPie" height="36"/>
        </CWidgetProgressIcon>
        <CWidgetProgressIcon
          header="50"
          text="Care Plans"
          color="gradient-danger"
          inverse
        >
          <CIcon name="cil-speedometer" height="36"/>
        </CWidgetProgressIcon>
      </CCardGroup>
      </CCard>
    </>
  )
}

export default Dashboard

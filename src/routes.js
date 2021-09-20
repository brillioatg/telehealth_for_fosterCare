import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Patients = React.lazy(() => import('./views/records/Patients'));
const Providers = React.lazy(() => import('./views/records/Providers'));
const PatientDetails = React.lazy(() => import('./views/records/PatientDetails'));
const Reports = React.lazy(() => import('./views/reports/Reports'));
const Reports2 = React.lazy(() => import('./views/reports/Report2'));
const Reports3 = React.lazy(() => import('./views/reports/Report3'));
const Reports4 = React.lazy(() => import('./views/reports/Report4'));
const Reports5 = React.lazy(() => import('./views/reports/Report5'));
const Upload = React.lazy(() => import('./views/records/upload'));
const Continuous = React.lazy(() => import('./views/insights/continuous'));
const Preventive = React.lazy(() => import('./views/insights/Preventive'));
const Device = React.lazy(() => import('./views/device/Device'));
const Notification = React.lazy(() => import('./views/notifications/calendar.jsx'));
const AmbulanceService = React.lazy(() => import('./views/services/AmbulanceService'));
const AmbulanceInform = React.lazy(() => import('./views/services/AmbulanceInform'));
const Ambulancedetails = React.lazy(() => import('./views/services/AmbulanceDetails'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/records/patients', name: 'Patients', component: Patients, exact: true },
  { path: '/records/providers', name: 'Providers', component: Providers, exact: true },
  { path: '/records/patientdetails', name: 'Patientdetails', component: PatientDetails, exact: true },
  { path: '/records/upload', name: 'upload', component: Upload, exact: true },
  { path: '/insights/continuous', name: 'insights', component: Continuous, exact: true },
  { path: '/insights/preventive', name: 'insights', component: Preventive, exact: true },
  { path: '/device/devices', name: 'Devices', component: Device, exact: true },
  { path: '/reports/reports', name: 'Reports', component: Reports, exact: true },
  { path: '/reports/report2', name: 'Report2', component: Reports2, exact: true },
  { path: '/reports/report3', name: 'Report3', component: Reports3, exact: true },
  { path: '/reports/report4', name: 'Report4', component: Reports4, exact: true },
  { path: '/reports/report5', name: 'Report5', component: Reports5, exact: true },  
  { path: '/notifications', name: 'Notifications', component: Notification, exact: true },
  { path: '/services/ambulance', name: 'AmbulanceService', component: AmbulanceService, exact: true },
  { path: '/services/ambulanceinfo', name: 'AmbulanceInfo', component: AmbulanceInform, exact: true },
  { path: '/services/ambulancedetails', name: 'Ambulancedetails', component: Ambulancedetails, exact: true}
]

export default routes;

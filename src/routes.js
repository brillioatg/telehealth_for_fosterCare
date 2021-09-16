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
  { path: '/records/providers', name: 'Providers', component: Providers },
  { path: '/records/patientdetails', name: 'patientdetails', component: PatientDetails },
  { path: '/records/upload', name: 'upload', component: Upload },
  { path: '/insights/continuous', name: 'insights', component: Continuous },
  { path: '/insights/preventive', name: 'insights', component: Preventive },
  { path: '/device/devices', name: 'Devices', component: Device },
  { path: '/reports/reports', name: 'Reports', component: Reports },
  { path: '/reports/report2', name: 'Report2', component: Reports2 },
  { path: '/reports/report3', name: 'Report3', component: Reports3 },
  { path: '/reports/report4', name: 'Report4', component: Reports4 },
  { path: '/reports/report5', name: 'Report5', component: Reports5 },  
  { path: '/notifications', name: 'Notifications', component: Notification },
  { path: '/services/ambulance', name: 'AmbulanceService', component: AmbulanceService },
  { path: '/services/ambulanceinfo', name: 'AmbulanceInfo', component: AmbulanceInform },
  { path: '/services/ambulancedetails', name: 'Ambulancedetails', component: Ambulancedetails}
]

export default routes;

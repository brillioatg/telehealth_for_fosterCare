import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Records']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Patients',
    to: '/records/patients',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Providers',
    to: '/records/providers',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Care Insights',
    route: '/insights',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Continuous Care',
        to: '/insights/continuous',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Preventive care',
        to: '/insights/preventive',
      }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/reports',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Hospital Insights',
        to: '/reports/report1',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Doctor Engagements',
        to: '/reports/report2',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Patient Demography',
        to: '/reports/report3',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Doctor Insights',
        to: '/reports/report4',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Patient Care',
        to: '/reports/report5',
      }
    ]
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Devices']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Device Management',
    to: '/device/devices',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Notification']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Video Consultation',
    to: '/notification',
    icon: 'cil-pencil',
    badge: {
      color: 'warning',
      text: '5',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Services']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Ambulance Service',
    to: '/services/ambulance',
    icon: 'cil-pencil',
  },
]

export default _nav

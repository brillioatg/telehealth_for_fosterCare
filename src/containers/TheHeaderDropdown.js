import React from 'react'
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import user from '../assets/users/user5.jpg'
import { useHistory } from "react-router-dom";

const TheHeaderDropdown = () => {
  const isLoggedIn = (localStorage.getItem("user")) ? true : false;
  const username = isLoggedIn ? localStorage.getItem("user") : "";
  const userrole = isLoggedIn ? localStorage.getItem("role") : "";
  let history = useHistory();
  const logout = () =>{ 
    localStorage.setItem("user", "")
    localStorage.setItem("role", "")
    // let path = 'dashboard'; 
    history.push("dashboard");
  }

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
      <span style={{marginRight:'15px'}}><b>Welcome {username} ({userrole})</b></span> 
        <div className="c-avatar">
          <img alt="Remy Sharp" height="45px" src={user} />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem onClick={logout}>
          <CIcon name="cil-bell" className="mfe-2" />
          Logout
        </CDropdownItem>
        {/* <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-credit-card" className="mfe-2" />
          Notifications
          <CBadge color="secondary" className="mfs-auto">1</CBadge>
        </CDropdownItem> */}
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown

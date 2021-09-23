import React , {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingOverlay from 'react-loading-overlay';
import {Link} from "react-router-dom";
// import "./dashboard.scss";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import "./Dashboard.css";
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { makeStyles } from '@material-ui/core/styles';
import location1 from "../services/images/location1.png";
import location2 from "../services/images/location2.png";
import location3 from "../services/images/location3.png";
import location4 from "../services/images/location4.png";
import location5 from "../services/images/location5.png";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';
import Maps from './Maps'
import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CCollapse,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CFade,
    CForm,
    CFormGroup,
    CFormText,
    CValidFeedback,
    CInvalidFeedback,
    CTextarea,
    CInput,
    CInputFile,
    CInputCheckbox,
    CInputRadio,
    CInputGroup,
    CInputGroupAppend,
    CInputGroupPrepend,
    CDropdown,
    CInputGroupText,
    CLabel,
    CSelect,
    CRow,
    CSwitch
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'

  const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
	}));

export default function PatientDetails(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
        paper: {
            padding: '6px 16px',
        },
        secondaryTail: {
            backgroundColor: theme.palette.secondary.main,
        },
      }));

    const [driverid, setdriverid] = useState('');
    const location = useLocation();

    const classes = useStyles();

    useEffect(() => {
		let driverid = location.search.split('=')[1];
		console.log('-----------------driverid--------------------------------------')
		console.log(driverid)
		console.log('-------------------------------------------------------')
		setdriverid(driverid)
	}, []);

      const displayTable = (id) => {
		  if(id === "U14-GXR")
		  {
			return (
                <CForm action="" method="post">
                <CFormGroup>
                <CInputGroup>
                    <CInputGroupPrepend>
                    <CInputGroupText><CIcon name="cil-user" />&nbsp;&nbsp;Drivername</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputGroupAppend>
                    <CInputGroupText>Mark Otto</CInputGroupText>
                    </CInputGroupAppend>
                    <br/>
                    <CInputGroupPrepend>
                    <CInputGroupText>Mobile Number</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputGroupAppend>
                    <CInputGroupText>2025550177</CInputGroupText>
                    </CInputGroupAppend>
                </CInputGroup>
                </CFormGroup>
            </CForm>
			)
		  }
        else if(id === "W40-XFP"){
            return (
                <CForm action="" method="post">
                <CFormGroup>
                <CInputGroup>
                    <CInputGroupPrepend>
                    <CInputGroupText><CIcon name="cil-user" />&nbsp;&nbsp;Drivername</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputGroupAppend>
                    <CInputGroupText>Jacob Thornton</CInputGroupText>
                    </CInputGroupAppend>
                    <br/>
                    <CInputGroupPrepend>
                    <CInputGroupText>Mobile Number</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputGroupAppend>
                    <CInputGroupText>781-585-8492</CInputGroupText>
                    </CInputGroupAppend>
                </CInputGroup>
                </CFormGroup>
            </CForm>
            )
        }
        else if(id === "U38-WKV"){
            return (
                <CForm action="" method="post">
                <CFormGroup>
                <CInputGroup>
                    <CInputGroupPrepend>
                    <CInputGroupText><CIcon name="cil-user" />&nbsp;&nbsp;Drivername</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputGroupAppend>
                    <CInputGroupText>July Dooley</CInputGroupText>
                    </CInputGroupAppend>
                    <br/>
                    <CInputGroupPrepend>
                    <CInputGroupText>Mobile Number</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputGroupAppend>
                    <CInputGroupText>978-897-9797</CInputGroupText>
                    </CInputGroupAppend>
                </CInputGroup>
                </CFormGroup>
            </CForm>
            )
        }
        else if(id === "V71-WWF"){
            return (
                <CForm action="" method="post">
                <CFormGroup>
                <CInputGroup>
                    <CInputGroupPrepend>
                    <CInputGroupText><CIcon name="cil-user" />&nbsp;&nbsp;Drivername</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputGroupAppend>
                    <CInputGroupText>Mary Moe</CInputGroupText>
                    </CInputGroupAppend>
                    <br/>
                    <CInputGroupPrepend>
                    <CInputGroupText>Mobile Number</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputGroupAppend>
                    <CInputGroupText>978-667-7711</CInputGroupText>
                    </CInputGroupAppend>
                </CInputGroup>
                </CFormGroup>
            </CForm>
            )
        }
        else if(id === "Y54-NLN"){
            return (
                <CForm action="" method="post">
                <CFormGroup>
                <CInputGroup>
                    <CInputGroupPrepend>
                    <CInputGroupText><CIcon name="cil-user" />&nbsp;&nbsp;Drivername</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputGroupAppend>
                    <CInputGroupText>John Doe</CInputGroupText>
                    </CInputGroupAppend>
                    <br/>
                    <CInputGroupPrepend>
                    <CInputGroupText>Mobile Number</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInputGroupAppend>
                    <CInputGroupText>781-236-2094</CInputGroupText>
                    </CInputGroupAppend>
                </CInputGroup>
                </CFormGroup>
            </CForm>
            )
        }
		else{
			return(
                <div>Details not available</div>
            )
		}}

        const displaygraph = (id) => {
            console.log(id)
            if(id === 'U14-GXR')
            {
                return(
                <img src={location1} alt="Ambulance" width="100%" height="350px"/>
                )
            }
            else if(id === 'W40-XFP')
            {
                return( 
                <img src={location2} alt="Ambulance" width="100%" height="350px"/>
                )
            }
            if(id === 'U38-WKV')
            {
                return(
                    <img src={location3} alt="Ambulance"  width="100%" height="350px"/>
                )
            }
            if(id === 'V71-WWF')
            {
                return(
                    <img src={location4} alt="Ambulance"  width="100%" height="350px"/>
                )
            }
            if(id === 'Y54-NLN')
            {
                return(
                    <img src={location5} alt="Ambulance"  width="100%" height="350px"/>
                )
            }
        }

  
        return (
            <React.Fragment>
            {/* <Link to="/dashboard">
                <ArrowBackIcon edge="start" className={classes.menuButton} color="inherit" aria-label="menu"/>
            </Link> */}
			<section className="content" style={{ padding: '10px 10px 10px 10px', margin: '0px 0px 0px 0px', width: '100%', minHeight: 'calc(70vh - 65px)' }}>
					<LoadingOverlay
						active={false}
						spinner
						text='Loading the content...'
						styles={{
							height: "100%",
							spinner: (base) => ({
								...base,
								width: '50px',
								'& svg circle': {
									stroke: 'rgba(255, 0, 0, 0.5)'
								}
							})
						}}
					>
					</LoadingOverlay>
			
            
			<h4 style={{ fontSize: '18px', fontWeight: 'bold',padding: '15px' }}>
			{/* <Link to="/ambulanceinfo"></Link> */}
				Ambulance Details : 
            </h4>
            <div>
            {/* <img src={location2} alt="Ambulance" width="85%" height="333"/> */}
                {/* {displaygraph(driverid)} <br/><br/><br/> */}
                {/* <Map 
                    google={props.google} 
                    zoom={10}
                    initialCenter={{
                        lat: 35.5496939,
                        lng: -120.7060049
                    }}
                    style={{width: '1200px', height: '300px'}} */}
                    <Maps/>
                
            </div>
		</section>
            
            {/* <table className="table" style={{float:"left", width:"50%"}}>
                <thead>
                    <tr >
                    <th style={{fontWeight: 'bold', fontSize: '1em', color: 'black', width:"50%", float:"left"}} scope="col">Driver Name</th>
                    <th style={{fontWeight: 'bold', fontSize: '1em', color: 'black', width:"50%", float:"left"}} scope="col">Driver Contact No</th>
                    </tr>
                </thead>
                <tbody>
                    {displayTable(driverid)}
                </tbody>
            </table> */}

            <Timeline align="alternate" style={{width:"50%", float:"left"}}>
                <TimelineItem>
                    <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        9:30 am
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot>
                        <DepartureBoardIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Departure from Hospital
                        </Typography>
                        <Typography>Call from Patient</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        10:00 am
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary">
                        <AirlineSeatIndividualSuiteIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Received Patient
                        </Typography>
                        <Typography>Boarded into Ambulance</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            10:10 am
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <DepartureBoardIcon />
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Departure
                        </Typography>
                        <Typography>Left from Patient Address</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        10:40 am
                    </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <RepeatIcon />
                    </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                        Arrival
                        </Typography>
                        <Typography>Arrived to the Hospital</Typography>
                    </Paper>
                    </TimelineContent>
                </TimelineItem>

            </Timeline> &nbsp;&nbsp;&nbsp;&nbsp;
            <CRow>
                <CCol>
                <CCard style={{width:"80%", marginLeft:"auto"}}>
                    <CCardHeader>
                    Driver Information
                    </CCardHeader>
                    <CCardBody>
                    {displayTable(driverid)}
                    </CCardBody>
                </CCard>
                </CCol>
                </CRow>
	</React.Fragment>
    )

}

// export default GoogleApiWrapper({
//  apiKey: ('AIzaSyCBBI-PWfzZgdt_ssWRdibMuju_RH2BD8M')
// })(PatientDetails);

import React , {useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingOverlay from 'react-loading-overlay';
import {Link} from "react-router-dom";
import { Button} from 'antd';
import Upload from './upload'
import "./dashboard.scss";
import {InfoCircleOutlined} from '@ant-design/icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import "./Dashboard.css";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// import ttConfig from '../config'

  const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
	}));

export default function PatientDetails() {
	const classes = useStyles();
    var stat, flags;

    const [singlepatientid, setsinglepatientid] = useState('');
    const [orderDetails, setOrderDetails] = useState('');
    const [allPurchaseOrderDetails, setAllPurchaseOrderDetails] = useState('');
    const [posts, setPosts] = useState([]);
	const history = useHistory();
    const location = useLocation();
	const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

   const handleClose = () => {
    setAnchorEl(null);
  };

  const displayInfo = () => {
	  return(
		  <span style={{position: 'relative', marginRight: '10px'}}>
	<InfoCircleOutlined  onClick={handleClick}/>
	<Popover
		id={id}
		open={open}
		anchorEl={anchorEl}
		onClose={handleClose}
		anchorOrigin={{
		vertical: 'bottom',
		horizontal: 'center',
		}}
		transformOrigin={{
		vertical: 'top',
		horizontal: 'center',
		}}>
    	<Typography className={classes.typography}>Do not have the access.</Typography>
    </Popover>
	</span>
	  )
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    useEffect(() => {
		// console.log(this.props.location)
		flags = location.search.split('^')[1];
		console.log(flags)
		let singlepatientid = location.search.split('=')[1];
		console.log('-----------------singleorderid--------------------------------------')
		console.log(singlepatientid)
		console.log('-------------------------------------------------------')
		setsinglepatientid(singlepatientid)
		// times=location.search.split('"')[1]	
		stat = location.search.split(':')[1]	// console.log(stat)
		// datess=location.search.split('}')[1]
		let singlepatientURL = 'https://tthvndwmkh.execute-api.us-east-1.amazonaws.com/rpm-api?bucket=rpm-aws-synthea&key=patientrecords.json'
		
		console.log('---------------------patientDetailsUrl----------------------------------')
		console.log(singlepatientURL)
		console.log('-------------------------------------------------------')
		fetch(singlepatientURL, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			return response.json();
			// setisLoading(false);
		}).then((patientdetails) => {
			console.log('-----------------------------patientdetails--------------------------')
			console.log(patientdetails.data)
			console.log('**********************')
			console.log(patientdetails.data.find(val => val.id === singlepatientid))
			setOrderDetails(patientdetails.data.find(val => val.id === singlepatientid))
			console.log('-------------------------------------------------------')
			setAllPurchaseOrderDetails(patientdetails)

			setPosts({ ...patientdetails[0] });
			// isLoading = false;
			console.log('------------------posts-------------------------------------')

			console.log(posts);
			console.log('------------------posts***-------------------------------------')
			document.getElementsByClassName('_loading_overlay_wrapper--active')[0].style.display = 'none';
		}).catch((error) => {
			console.log('order error', error);
		})
	}, []);

	
    const displayPatientName = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Patient Name</b></th>
					<td style={{ height: '0px' }}>{orderDetails && orderDetails.name}</td>
				</tr>
			)
		}
	}	
	const displayPatientID = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Patient id</b></th>
					<td style={{ height: '0px' }}>{orderDetails && orderDetails.id}</td>
				</tr>
			)
		}
	}

	const displayPatientDate = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Birthdate {displayInfo()}</b></th>
					<td className="pw" style={{ height: '0px' }}>{orderDetails && orderDetails.birthDate}</td>
				</tr>
			)
		}
	}

	const displayPatientGender = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Gender</b></th>
					<td style={{ height: '0px' }}>{orderDetails && orderDetails.gender}</td>
				</tr>
			)
		}
	}	

	const displayPatientStatus = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Marital Status</b></th>
					<td style={{ height: '0px' }}>{orderDetails && orderDetails.Marital_Status}</td>
				</tr>
			)
		}
	}	

	// const displayRemoteCare = () => {
	// 	if(orderDetails) {
	// 		return (
	// 			<tr>
	// 				<th style={{ height: '0px', fontWeight: 'bold' }}><Checkbox/></th>
	// 				<td style={{ height: '0px' }}>Remote Care</td>
	// 			</tr>
	// 		)
	// 	}
	// }	

	// const displayConsentForm = () => {
	// 	if(orderDetails) {
	// 		return (
	// 			<tr>
	// 				<th style={{ height: '0px', fontWeight: 'bold' }}><Checkbox/></th>
	// 				<td style={{ height: '0px' }}>Consent Form</td>
	// 			</tr>
	// 		)
	// 	}
	// }	

	const displaySSN = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Social Security Number{displayInfo()}</b></th>
					<td className="pw" style={{ height: '0px' }}>{orderDetails && orderDetails.ssn}</td>
				</tr>
			)
		}
	}

	const displayMail = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Guardian Email</b></th>
					<td style={{ height: '0px' }}>{orderDetails && orderDetails.email}</td>
				</tr>
			)
		}
	}

	const displayMRN = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Medical Record Number</b></th>
					<td style={{ height: '0px' }}>{orderDetails && orderDetails.mrn}</td>
				</tr>
			)
		}
	}

	const displayPPN = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Passport Number{displayInfo()}</b></th>
					<td className="pw" style={{ height: '0px' }}>{orderDetails && orderDetails.ppn}    </td>
				</tr>
			)
		}
	}

	const displayDL = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Driving Liscense{displayInfo()}</b></th>
					<td className="pw" style={{ height: '0px' }}>{orderDetails && orderDetails.Driver_License}</td>
				</tr>
			)
		}
	}
	
	const displayAddress = () => {
		if(orderDetails) {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Address</b></th>
					<td style={{ height: '0px' }}>{orderDetails && orderDetails.address},{orderDetails && orderDetails.city},{orderDetails && orderDetails.state},{orderDetails && orderDetails.country},{orderDetails && orderDetails.postalCode}</td>
				</tr>
			)
		}
	}

	const redirectToPatientDetails = (e, id) => {
        var url = `/insights?id=${id}`;
        history.push(`${url}`);
    }

	const redirectToConsultDetails = (e, id) => {
        var url = `/consultation?id=${id}`;
        history.push(`${url}`);
    }

	const displayViewInsights = (id) => {
		  if(id === "d4a30d91-8283-eddc-799c-d3131f7cf2d7" || id === "5be71bc3-c641-111b-bc57-2fb9b58eba8d")
		  {
			return (
				<Button type="primary">View Insights</Button>
				
			)
		  }
		  else{
			return(
			  	<Button style={{backgroundColor:"#dee2e6", color:"black"}} disabled>View Insights</Button>
				 
			)
		  }
		}	

	const displayNotification = (id) => {	
		if(id === "d4a30d91-8283-eddc-799c-d3131f7cf2d7" || id === "5be71bc3-c641-111b-bc57-2fb9b58eba8d")
		{
		  return (
			<Button type="primary">View Notifications</Button>
		  )
		}
		else
		{
			return (
				<Button style={{backgroundColor:"#dee2e6", color:"black"}} disabled>View Notifications</Button>
			  )
		}
	}

		

	const displayCheckedBox = (row) => {
		// console.log("--------------row")
		// console.log(row);
		  if(row === "d4a30d91-8283-eddc-799c-d3131f7cf2d7" || row === "5be71bc3-c641-111b-bc57-2fb9b58eba8d")
		  // if(row) 
		  {
			return (
				<div>
			  		<FormControlLabel disabled control={<Checkbox checked name="checkedEvent" style={{color: '#1890ff'}} />} label="Remote Care"/>
			  		<FormControlLabel disabled control={<Checkbox checked name="checkedEvent" style={{color: '#1890ff'}} />} label="Consent Form"/>
				</div>
			)
		  }
		  else{
			return(
			  	<div>
			  		<FormControlLabel disabled control={<Checkbox name="checkedEvent" />} label="Remote Care"/>
			  		<FormControlLabel disabled control={<Checkbox name="checkedEvent" />} label="Consent Form"/>
				</div>
			)
		  }
		}

    return (
        <div>
            <React.Fragment>
			<section className="content" style={{ padding: '10px 10px 10px 10px', margin: '0px 0px 0px 0px', width: '100%' }}>
					<LoadingOverlay
						active={true}
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
			
            
			 <h4 style={{ fontSize: '18px', fontWeight: 'bold', textAlign:'left', padding: '15px' }}>
			{/* <Link to="/patientinfo"><ArrowBackIcon style={{color:"black"}}/></Link>&nbsp;&nbsp; */}
				Patient Details : 
				<a className="form-group col-md-20" style={{ float: "right" }} onClick={(e) => { redirectToPatientDetails(e, singlepatientid)}}>
					{displayViewInsights(singlepatientid)}
				</a>
			
				<a className="form-group col-md-20" style={{ float: "right", marginRight:"5px"  }} onClick={(e) => { redirectToConsultDetails(e, singlepatientid)}}>
					{displayNotification(singlepatientid)}
				</a>
				
			</h4>

            <div className="col-lg-12 col-md-12 place-order" style={{textAlign:'left'}}>
                <div className="padding-bottom20">
                    <Table striped bordered hover>
                        <tbody>
                            {orderDetails && displayPatientID()}	
                            {orderDetails && displayPatientName()}	
							{orderDetails && displayMail()}
                            {orderDetails && displayPatientDate()}
                            {orderDetails && displayPatientGender()}
							{orderDetails && displayAddress()}
                            {orderDetails && displayPatientStatus()}
                            {orderDetails && displaySSN()}
							{orderDetails && displayPPN()}
							{orderDetails && displayMRN()}
							{orderDetails && displayDL()}
							
							{orderDetails && displayCheckedBox(singlepatientid)}
                        </tbody>
                    </Table>	
                </div>
            </div><br/><br/>
			
			{/* <div>
				<h2>Upload Documents</h2>
				<p style={{color:"red"}}>*Max 5 Documents</p>
				<a className="form-group col-lg-6 col-md-20" style={{ float: "right", width:"25%"  }}>
					{/* {<Upload/>}
				</a>
			</div> */}
					
		</section>
	</React.Fragment>
        </div>
    )
}

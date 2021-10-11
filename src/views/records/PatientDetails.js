import React , {useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingOverlay from 'react-loading-overlay';
import {Link} from "react-router-dom";
// import { Button} from 'antd';
import Upload from './upload'
// import "./dashboard.scss";
import {InfoCircleOutlined} from '@ant-design/icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import "./Dashboard.css";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Modalcontent from './modal.js';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

// import ttConfig from '../config'

	const modalstyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	};
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
	const [anchorEl, setAnchorEl] = useState(null);
	const [modalopen, setmodalopen] = useState(false);
  	const modalhandleOpen = () => setmodalopen(true);
  	const modalhandleClose = () => setmodalopen(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

   const handleClose = () => {
    setAnchorEl(null);
  };

  const displayInfo = () => {
	  return(
		  <span style={{position: 'relative', marginLeft: '6px'}}>
	<span><InfoCircleOutlined  onClick={handleClick} style={{fontSize: '1em'}}/></span>
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
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Birthdate{displayInfo()}</b></th>
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

	const displayHospital = (row) => {
		if(row === "d4a30d91-8283-eddc-799c-d3131f7cf2d7") {
			return (
				<tr>
					<th style={{ height: '0px', fontWeight: 'bold' }}><b>Share Details to Provider{displayInfo()}</b></th>
					<td className="pw" style={{ height: '0px' }}>A BALANCED WAY</td>
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
        var url = `/notifications?id=${id}`;
        history.push(`${url}`);
    }

	const displayViewInsights = (id) => {
		  if(id === "d4a30d91-8283-eddc-799c-d3131f7cf2d7")
		  {
			return (
				<span>
					<button type="button" class="btn btn-primary form-group col-md-20" style={{ float: "right", marginRight:"5px" }} onClick={(e) => { redirectToPatientDetails(e, singlepatientid)}}>View Insights</button>
				</span>
			)
		  }
		  else{
			return(
				<span>
			  		<button type="button" class="btn btn-primary form-group col-md-20" style={{float: "right", marginRight:"5px", color:"black"}} disabled>View Insights</button>
				</span> 
			)
		  }
		}	

	const displayNotification = (id) => {	
		if(id === "d4a30d91-8283-eddc-799c-d3131f7cf2d7")
		{
		  return (
			<span>
				<button type="button" class="btn btn-primary form-group col-md-20" style={{ float: "right", marginRight:"5px" }} onClick={(e) => { redirectToConsultDetails(e, singlepatientid)}}>View Notifications</button>
		  	</span>
		  )
		}
		else
		{
			return (
				<span>
					<button type="button" class="btn btn-primary form-group col-md-20" style={{float: "right", marginRight:"5px", color:"black"}} disabled>View Notifications</button>
			  	</span>
			)
		}
	}

	const displayshare = () => {
			return (
				<span>
					<button type="button" class="btn btn-primary form-group col-md-20" style={{ float: "right", marginRight:"5px" , paddingTop: '5px'}} onClick={(e) => {displaysharetoast()}}>Share Details</button>
				</span>
			)
		}

	const displaysharetoast = () => {
			modalhandleClose()
			toast.success("Successfully shared the details with the Provider")
		}

	const displayfhirdetails = (id) => {	
		if(id === "d4a30d91-8283-eddc-799c-d3131f7cf2d7")
		{
		  return (
			  <div>
				<button type="button" class="btn btn-primary form-group col-md-20" style={{ float: "right"}} onClick={(e) => { modalhandleOpen()}}>View Monitoring Details</button>
				<Modal
						open={modalopen}
						onClose={modalhandleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={modalstyle}>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							<Modalcontent/>
						</Typography>
						<Typography id="modal-modal-description" class="d-flex justify-content-center" sx={{ mt: 2 }} style={{ paddingTop: '5px'}}>
							{displayshare()}
						</Typography>
						</Box>
					</Modal>
    		</div>
		  )
		}
		else
		{
			return (
				<span>
					<button type="button" class="btn btn-primary form-group col-md-20" style={{float: "right", marginRight:"5px", color:"black"}} disabled>View Monitoring Details</button>
			  	</span>
			)
		}
	}

		

	const displayCheckedBox = (row) => {
		// console.log("--------------row")
		// console.log(row);
		  if(row === "d4a30d91-8283-eddc-799c-d3131f7cf2d7")
		  {
			return (
				<span>
			  		<FormControlLabel disabled control={<Checkbox checked name="checkedEvent" style={{color: '#1890ff'}} />} label="Remote Care"/>
			  		<FormControlLabel disabled control={<Checkbox checked name="checkedEvent" style={{color: '#1890ff'}} />} label="Consent Form"/>
				</span>
			)
		  }
		  else{
			return(
			  	<span>
					<span><FormControlLabel disabled control={<Checkbox name="checkedEvent"/>} label="Remote Care"/></span>
			  		<span><FormControlLabel disabled control={<Checkbox name="checkedEvent"/>} label="Consent Form"/></span>
				</span>
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
			
            
			 <span style={{ fontSize: '18px', fontWeight: 'bold', textAlign:'left', padding: '15px' }}>
			{/* <Link to="/patientinfo"><ArrowBackIcon style={{color:"black"}}/></Link>&nbsp;&nbsp; */}
				Patient Details : 
						{displayfhirdetails(singlepatientid)}
						{displayNotification(singlepatientid)}
						{displayViewInsights(singlepatientid)}
			</span>

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
							{orderDetails && displayHospital(singlepatientid)}
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

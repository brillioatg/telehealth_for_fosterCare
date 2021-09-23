import React, {useEffect } from 'react'
import { Layout, Menu, Input  } from 'antd';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import './PatientInfo.css';
import 'antd/dist/antd.css';
import {TableOutlined,UserOutlined,AreaChartOutlined} from '@ant-design/icons';
import { Dropdown, message } from 'antd';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import VideocamIcon from '@material-ui/icons/Videocam';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';
import InputBase from '@material-ui/core/InputBase';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { alpha} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {
    CBadge
  } from '@coreui/react'
// import emailjs from 'emailjs-com';
var AWS = require('aws-sdk');

  
export default function ProviderInform() {
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        small: {
          width: theme.spacing(3),
          height: theme.spacing(3),
        },
        large: {
          width: theme.spacing(6),
          height: theme.spacing(6),
        },
        search: {
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: alpha(theme.palette.common.white, 0.35),
          '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.5),
          },
          margin: '10px',
          float : 'right',
          boxShadow: '-4px 8px 20px 0px grey',
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: '98%',
          },
        },
        searchIcon: {
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        inputRoot: {
          color: 'inherit',
        },
        inputInput: {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '100ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      
      const StyledTableCell = withStyles((theme) => ({
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
    
        const [data, setdata]=React.useState([]);
        const [collapsed, setcollapsed]=React.useState(false);
        const [searchTerm, setsearchTerm]=React.useState('');
        const [page, setpage]=React.useState(0);
        const [rowsPerPage, setRowsPerPage] = React.useState(5);
        const [ordPlaced, setordPlaced]=React.useState(2);
        const classes = useStyles();
    
        const { Header, Sider, Content } = Layout;
        const { Search } = Input;
    
        const handleChangePage = (event, newPage) => {
            setpage(newPage);
        };

        const sendemail=(name, specialist)=>{
          
          // const templateParams = {
          //   name: name,
          //   notes: 'Immediate consultation for the patient'+name+ 'with the specialist'+specialist+'due to detection of low oxygen or high Temperature'
          // };

          //   emailjs.send('service_yjt5xpr','template_jt5dkn9',templateParams, 'user_jhGso3EKVsW92UEEuze6z')
          //   .then(res=>{
          //       console.log(res)
          //   }).catch(err=>console.log(err))

            // AWS.config.update({accessKeyId: 'AKIAVTQNE33K4O7JV47G',secretAccessKey: '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', region: 'us-east-1'});
            // var params = {
            //   Message: 'Immediate consultation for the patient'+name+ 'with the specialist'+specialist+'due to detection of low oxygen or high Temperature', 
            //   TopicArn: 'arn:aws:sns:us-east-1:385500896981:rpm-test-iot'
            // };
            // var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
            // publishTextPromise.then(
            //   function(data) {
            //     console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
            //     console.log("MessageID is " + data.MessageId);
            //   }).catch(
            //     function(err) {
            //     console.error(err, err.stack);
            //   });

            // toast.success("Appointment of "+name+"with"+specialist);

        }
        
        const handleChangeRowsPerPage = event => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setpage(0);
        };


        const riskscore=(cluster_label)=>{
          if(cluster_label === '0')
          {
            return(
              <CBadge color="warning" className="mfs-auto">Low Risk</CBadge>
            )
          }
          else if(cluster_label === '1')
          {
            return(
              <CBadge color="danger" className="mfs-auto">High Risk</CBadge>
            )
          }
          else
          {
            return(
              <CBadge color="info" className="mfs-auto">Medium Risk</CBadge>
            )
          } 
        }

        
        useEffect(() => { 
          var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://tthvndwmkh.execute-api.us-east-1.amazonaws.com/rpm-api?bucket=rpm-aws-synthea&key=patientrecords.json", requestOptions)
          .then((resp) => resp.json())
          .then((response) => {
            setdata(response.data)
            console.log(data)
          })
          .catch(error => console.log('error', error));
        
        },[])

       

    return (
      <>

        <p style={{fontSize:'22px', textAlign:'center'}}><strong>Risk Patient Details</strong></p>

          <Paper>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search by Code..."
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
                onChange={(e)=>{setsearchTerm(e.target.value)}}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow style={{ padding: '0px' }}>
                {/* <TableCell align="center" style={{ fontWeight: 'bold', width: '400px' }}>Id</TableCell> */}
                <TableCell style={{ fontWeight: 'bold'}}>Patient ID</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Patient Name</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Patient Email</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Specialist</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Risk Score</TableCell>
                <TableCell style={{ fontWeight: 'bold'}}>Email Notifications</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).filter(val=>{
                  if(searchTerm === "")
                  {
                    return val;
                  }
                  else if((val.id.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (val.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (val.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (val.address.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (val.special.toLowerCase().includes(searchTerm.toLowerCase())) ||
                  (val.specialist.toLowerCase().includes(searchTerm.toLowerCase()))
                  ){
                     return val  
                  }
                })
                  .map((row, index) => {
                    return(
                      <StyledTableRow>
                        <StyledTableCell align="left">{row.id}</StyledTableCell>
                        <StyledTableCell align="left">{row.name}</StyledTableCell>
                        <StyledTableCell align="left">{row.email}</StyledTableCell>
                        <StyledTableCell align="left">{row.doctor}</StyledTableCell>
                        <StyledTableCell>{riskscore(row.cluster_label)}</StyledTableCell>
                        <StyledTableCell key={index}><button key={index} class="btn btn-primary" onClick={sendemail(row.name, row.doctor)}>Send</button></StyledTableCell>
                      </StyledTableRow>
                    )
                  })
                 }
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={ordPlaced}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
         {/* </Content> */}
         </>
        // </Layout> 

     
    )
}

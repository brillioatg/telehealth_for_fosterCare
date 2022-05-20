import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardGroup,
    Button,
    Row,
    Col,
  } from "reactstrap";
  
  const Blog = (props) => {
      console.log("deaaaaa",props)
    return (
        <Row>
        <h5 className="mb-3 mt-3">Child Historic Data</h5>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5">Primary Physician</CardTitle>
            <CardText>
              <p><b>PCP: </b> {props.data.doctor}</p>
              <p><b>Primary Location:</b>7 BARON WAY, US</p>
              <p><b>Foster-Parent: </b>{props.data.FosterParent}</p>
              <b>No of Visit: </b> {props.data.VisitNO}<br/>
              <b>Last Visit: </b>{props.data.lastVisit}
            </CardText>
            {/* <div>
              <Button color="light-warning">Go somewhere</Button> 
            </div> */}
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5">Condition and Immunization</CardTitle>
            <CardText>
            <>
            <p><b>Condition: </b>{props.data.condition}</p>
            <p><b>Vital Signs: </b>{props.data.vitalSigns}</p>
            <p><b>Immunization: </b>{props.data.Immunization}</p>
            <p><b>Medication: </b>{props.data.medication}</p>
             </>
            </CardText>
            {/* <div>
              <Button color="light-danger">Go somewhere</Button>
            </div> */}
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5">Care Plans</CardTitle>
            <CardText>
              <p><b>Care Plan: </b>{props.data.carePlan}</p>
              <p><b>Measures: </b>Access to Preventive and continuous Care, Ambulatory Health Services, Realtime Monitoring of Patient Data</p>
            </CardText>
            <div>
              {/* <Button color="light-success">Go somewhere</Button> */}
            </div>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Blog;
  
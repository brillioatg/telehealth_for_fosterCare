import React, {useEffect } from 'react'
import Iframe from 'react-iframe'
import continuousimg from './Continuous-Care.PNG'

export default function Insights() {

//   const [data, setdata]=React.useState([]);

//   const fetchQSDashboard = () => {
//     var requestOptions = {
//       method: 'GET'
//     };

//     fetch("https://cvzg49w5bc.execute-api.us-east-1.amazonaws.com/test-QS/qsresource-sample?mode=static", requestOptions)
//     .then((resp) => resp.text())
//     .then((response) => {
//       setdata(response)
//       console.log(data)
//     })
//     .catch(error => console.log('error', error));
//   }

//   useEffect(() => { 
//     fetchQSDashboard();
//  },[])

//  console.log(data)

  return (
    <div>
      <h1>AWS- Continuous Care</h1>
     <img width="100%" height="450px" src={continuousimg}/>
    {/* <Iframe width="100%" height="450px" url="https://cvzg49w5bc.execute-api.us-east-1.amazonaws.com/test-QS/qsresource-sample?mode=static"/> */}
    </div>
  )
}

import React, {useEffect } from 'react'
import Charts from '../charts/Charts';
import DoughnutChart from '../charts/DoughnutChart'

export default function Insights() {
  var dashboard;
  var QuickSightEmbedding = require("amazon-quicksight-embedding-sdk");

  // useEffect(()=>{
  //   console.log('dashboard')
  //   embedDashboard();
  // })

        // function embedDashboard() {
        //     var containerDiv = document.getElementById("embeddingContainer");
        //     var options = {
        //         // replace this dummy url with the one generated via embedding API
        //         url: "https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/48be7a89-9b91-4b84-9154-545472a06a73?isauthcode=true&identityprovider=quicksight&code=authcode",  
        //         container: containerDiv,
        //         scrolling: "no",
        //         height: "700px",
        //         iframeResizeOnSheetChange: false, // use this option in combination with height: AutoFit,
        //                                           // to allow iframe height to resize dynamically, based on sheet height, on changing sheets.
        //         width: "1000px",
        //         footerPaddingEnabled: true,
        //         sheetId: 'YOUR_SHEETID', // use this option to specify initial sheet id to load for the embedded dashboard
        //         sheetTabsDisabled: false, // use this option to enable or disable sheet tab controls
        //         undoRedoDisabled: false, // use this option to disable undo and redo buttons
        //         resetDisabled: false // use this option to disable reset button
        //     };
        //     dashboard = QuickSightEmbedding.embedDashboard(options);
        // }

  const [data, setdata]=React.useState([]);
  const [p_data, setp_data]=React.useState([]);

  const fetchQSDashboard = () => {
    var requestOptions = {
      method: 'GET'
    };

    fetch("https://cvzg49w5bc.execute-api.us-east-1.amazonaws.com/test-QS/qsresource-sample?mode=getUrl", requestOptions)
    .then((resp) => resp.json())
    .then((response) => {
      setdata(response.EmbedUrl)
      console.log(data)
    })
    .catch(error => console.log('error', error));
  }

  const fetchQSPrevData = () => {
    var requestOptions = {
      method: 'GET'
    };

    fetch("https://5aq1ubfm45.execute-api.us-east-1.amazonaws.com/test-QS/qs-embed-sample2?mode=getUrl", requestOptions)
    .then((resp) => resp.json())
    .then((response) => {
      setp_data(response.EmbedUrl)
      console.log(data)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => { 
    fetchQSDashboard();
    fetchQSPrevData();
 },[])

 console.log(data)

  return (
    <div>
      <a href={data} target="_blank"><Charts/></a>
      {/* <h1>AWS- Continuous Care</h1>
     {/* <img width="100%" height="450px" src={continuousimg}/> */}
     {/* <div id="embeddingContainer">{embedDashboard}</div>  */}
    {/* <iframe width="100%" height="450px" src={data} frameborder="0" allowFullScreen="true"></iframe>  */}
    
    {/* <a href="https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/9f786544-dc07-4370-8949-c848fcb21ed5/views/bb2141dd-052b-4b19-b0f4-a1ce3d9032a0" target="_blank"><DoughnutChart/></a> */}
    {/* <iframe width="100%" height="450px" url="https://cvzg49w5bc.execute-api.us-east-1.amazonaws.com/test-QS/qsresource-sample"></iframe>  */}
    
    </div>
  )
}

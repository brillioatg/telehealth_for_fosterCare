import React, { useEffect, useState } from 'react';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
    
toast.configure() 
export default function Notify(props){

    const [data, setdata] = useState([]);
    const {val} = props;
    console.log(val)

    const notify = ()=>{
        toast.warning("Meeting with Patient Arthur650 Ortiz186");
    }

    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://bgdpfd2q19.execute-api.us-east-1.amazonaws.com/notification", requestOptions)
          .then((resp) => resp.json())
          .then((response) => {
            setdata(response)
            console.log(data)
          })
          .catch(error => console.log('error', error));
        
        notify()
    },[])
    return (
        <div className="notify">
            {/* <button onClick={notify}>Click Me!</button> */}
            </div>
    );
}
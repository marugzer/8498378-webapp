//CandidateId:8498378

import './App.css';
//import MetricAComponent from './MetricAComponent';
import MetricAChart from './MetricAChart';
import MetricBChart from './MetricBChart';
function App() {
  
    // const apiUrlbfa = 'http://127.0.0.1:8000/api/metric_a/country/bfa/2022-06-01/2023-07-01';        
    // const apiUrlcol ='http://127.0.0.1:8000/api/metric_a/country/col/2022-06-01/2023-07-01';
      const apiUrl = 'http://127.0.0.1:8000/api/metric_a/country/col/2022-06-01/2023-07-01';
      
      //The react app can be designed to select country , start date and end date      
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'  }}>    
        <h1  style={{ margin: '0px' , padding:'0px'}} > Average monthly Value Metric A</h1>        
        <MetricAChart apiUrl={apiUrl}  /> 

        <h1 style={{ marginBottom: '0px' , paddingBottom:'0px'}} >Daily national estimate for FCS prevalenence Mertic B</h1>
        <MetricBChart  apiUrl={apiUrl}/>    
    </div>
  );
}

export default App;



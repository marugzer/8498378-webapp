//CandidateId:8498378
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//I'm using a temporary solution to fetch data from MetricBData.js file as i have issue accessing the local web api with cors issue
import MetricAData from './MetricAData'; 

//with no issue on CORS it can accept apiurl, it will replace the next line afte this comment
/* 
const MetricsBChart = ({ apiUrl }) => {
  {
    const [data, setData] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
  
    useEffect(() => {
      fetchMetricsBDataFromAPI(apiUrl)
        .then((fetchedData) => {
          setData(fetchedData);
          setSelectedYear(Object.keys(fetchedData.MetricsB)[0]);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, [apiUrl]);
  
    const handleYearChange = (event) => {
      setSelectedYear(event.target.value);
    };
  
    if (!data) {
      return <div>Loading...</div>;
    }
*/
const MetricAChart = ({ apiUrl }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0px' , padding:'0px' }}>
        <h2 style={{ marginTop: '5px' , paddingTop:'0px'}}>Country: {MetricAData.Country}</h2>
        <h3  style={{ marginTop: '0px' , paddingTop:'0px'}}>Period : {MetricAData.StartDate} -  {MetricAData.EndDate} </h3>
        
        <LineChart width={1200} height={400} data={MetricAData.MetricA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Fcs" name="Fcs" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="HealthAccess" name="HealthAccess" stroke="#82ca9d" />
            <Line type="monotone" dataKey="LivelihoodCoping" name="LivelihoodCoping" stroke="#ffc658" />
            <Line type="monotone" dataKey="MarketAccess" name="MarketAccess" stroke="#d62728" />
            <Line type="monotone" dataKey="Rcsi" name="Rcsi" stroke="#9467bd" />
        </LineChart>
     </div>
  );
};

export default MetricAChart;

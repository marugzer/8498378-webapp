//CandidateId:8498378
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//I'm using a temporary solution to fetch data from MetricBData.js file as i have issue accessing the local web api with cors issue
import MetricBData from './MetricBData'; 

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

const MetricsBChart = ({ apiUrl }) => { 

  const years = Object.keys(MetricBData.MetricsB);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const selectedData = MetricBData.MetricsB[selectedYear];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
       <h2 style={{ marginTop: '5px' , paddingTop:'0px'}}>Country: {MetricBData.Country}</h2>
       <h3 style={{ marginTop: '5px' , paddingTop:'0px'}}>Period : {MetricBData.StartDate} -  {MetricBData.EndDate} </h3>
      <div>          
        <label>Select Year:</label>
        <select value={selectedYear} onChange={handleYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      
      <LineChart width={1500} height={400} data={selectedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>     

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Daily national estimate" name="Daily national estimate" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
   
  );
};

export default MetricsBChart;

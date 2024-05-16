// import { useEffect,useState } from "react";
// import { useParams } from "react-router-dom";
// import FinnHubApi from "../apis/FinnHubApi";
// import { StockChart } from "../components/StockChart";
// import { StockData } from "../components/StockData";


// const formatData = (data) =>{
//     return data.t.map((el,index)=>{
//         return{
//             x:el *1000,
//             y: Math.floor(data.c[index])
//         }
//     })
// }

// export const StockDetailPage = () => {
//   const { symbol } = useParams();
//   const {chartData,setChartData} = useState()

//   useEffect(() => {
//     const fetchData = async () => {
//       const date = new Date();
//       const currentTime = Math.floor(date.getTime() / 1000);
//       let oneDay;
//       if(date.getDay()===6){
//         oneDay = currentTime - 2 * 24 * 60 * 60;

//       }else if (date.getDay()===0){
//         oneDay = currentTime - 3 * 24 * 60 * 60;
//       }else { 
//         oneDay = currentTime - 24 * 24 * 60 * 60;}
//         const oneWeek = currentTime - 7*24*60*60;
//         const oneYear = currentTime - 365*24*60*60;
//       try {
      
//         const responses = await Promise.all([await FinnHubApi.get("/stock/candle", {
//             params: {
//               symbol,
//               from: oneDay,
//               to: currentTime,
//               resolution: 30,
//             }
//           }),await FinnHubApi.get("/stock/candle", {
//             params: {
//               symbol,
//               from: oneWeek,
//               to: currentTime,
//               resolution: 60,
//             }
//           }),await FinnHubApi.get("/stock/candle", {
//             params: {
//               symbol,
//               from: oneYear,
//               to: currentTime,
//               resolution: "W",
//             }
//           })])
      
//         console.log("API response:", responses); // Access the data property of the response
//         setChartData({
//             day:formatData(responses[0].data),
//             week : formatData(responses[1].data),
//             year : formatData(responses[2].data)
    
//           })
//       } catch (error) {
//         console.error("Error fetching data:", error.response || error.message || error);
//       }
     
//     }

//     fetchData()
//   }, [symbol]);

//   return (
//     <div>
//       {chartData && (
//         <div>
//             <StockChart  chartData={chartData} symbol={symbol}/>
           
//             </div>
//       )} 
       
//       {symbol}
//     </div>
//   );
// }




import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StockChart } from "../components/StockChart";
import { StockData } from "../components/StockData";
import {Slider} from "../widgets/Slider"
const formatData = (data) => {
  return data.map(([date, values]) => ({
    x: new Date(date).getTime(),
    y: parseFloat(values["4. close"]),
  }));
};

export const StockDetailPage = () => {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "CR9J0MPO8TE8GMOQ";
        const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

        const response = await axios.get(apiUrl);
        const data = response.data["Time Series (Daily)"];
        const formattedData = Object.entries(data).map(([date, values]) => ({
          x: new Date(date).getTime(),
          y: parseFloat(values["4. close"]),
        }));

        setChartData({
          day: formattedData.slice(-24), // Last 24 hours
          week: formattedData.slice(-7 * 7), // Last 7 days
          year: formattedData, // Entire year
        });
      } catch (error) {
        console.error("Error fetching data:", error.message || error);
      }
    };

    fetchData();
  }, [symbol]);

  return (
    <div>
      
      {chartData && (
        <div>
          <StockChart chartData={chartData} symbol={symbol} />
        </div>
      )}
      <div className="text-red-700 mt-[40px] py-6 text-2xl mx-0">Ticker Name : {symbol}
      </div>
     
      <StockData symbol={symbol}/>
     
      
    </div>
  );
};

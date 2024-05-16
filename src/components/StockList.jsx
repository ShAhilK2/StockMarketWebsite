import { useState, useEffect,useContext } from "react";
import FinnHubApi from "../apis/FinnHubApi";
import { BsFillCaretDownSquareFill } from "react-icons/bs";
import { BsFillCaretUpSquareFill } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { WatchListContext } from "../context/WatchListContext";
import { Footer } from "./Footer";

export function StockList() {
  const [stock, setStock] = useState([]);
  const {watchlist,deleteStock} = useContext(WatchListContext);
  const navigate = useNavigate();
 
const ChangeColor = (change) =>{
    return change > 0  ? "success" : "danger"  
}
const RenderIcon = (change) =>{
    return change > 0  ? <BsFillCaretUpSquareFill/> : <BsFillCaretDownSquareFill />  
}
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const responses = await Promise.all(watchlist.map((stock) => {
          return FinnHubApi.get("/quote", {
            params: {
              symbol: stock
            }
          });
        }));

        console.log("Responses:", responses);

        const data = responses.map((response) => {
          return {
            data: response.data,
            symbol: response.config.params.symbol
          };
        });

        console.log("Data array:", data);

        if (isMounted) {
          setStock(data);
        }
      } catch (err) {
        // Handle error
        console.error(err);
      }
    };

    fetchData();



    return () => {
      isMounted = false;
    };
  }, [watchlist]);


  const handleStockSelect = (symbol) =>{
    navigate(`detail/${symbol}`)

  }

  return <div>
    <table className="table hover mt-5 ">
        <thead style={{color: "rgb(79,89,102)"}}>
            <tr>
                <th>Name</th>
                <th>Last</th>
                <th>Change</th>
                <th>Change%</th>
                <th>High</th>
                <th>Low</th>
                <th>Open</th>
                <th>Previous Close</th>
            </tr>
        </thead>
        <tbody style={{}}>
        {stock.map((stockData, index) => (
  <tr style={{cursor : "pointer"}} className="table-row" key={`${index}-${stockData.symbol} `} onClick={()=>
    handleStockSelect(stockData.symbol)
}>
    <th scope="row">{stockData.symbol}</th>
    <td>{stockData.data.c}</td>
    <td className={`text-${ChangeColor(stockData.data.d)}`}>{stockData.data.d} {RenderIcon(stockData.data.d)}</td>
    <td className={`text-${ChangeColor(stockData.data.dp)}`}>{stockData.data.dp}  {RenderIcon(stockData.data.dp)}</td>
    <td>{stockData.data.h}</td>
    <td>{stockData.data.l}</td>
    <td>{stockData.data.o}</td> 
    <td>{stockData.data.pc} <button onClick={(el)=>{
      el.stopPropagation()
      deleteStock(stockData.symbol)
    }} className="btn btn-danger btn-sm ml-3 d-inline-block delete-button">Remove</button> </td>
  </tr>
))}


</tbody >

    </table>
    
  </div>
  
}

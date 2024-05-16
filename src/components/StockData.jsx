import { useEffect, useState } from "react";
import FinnHubApi from "../apis/FinnHubApi";

export const StockData = ({ symbol }) => {
  const [stockData, setStockData] = useState();
  let isMounted = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await FinnHubApi.get("/stock/profile2", {
          params: {
            symbol,
          },
        });
        console.log(response); // Fix the typo here
        if (isMounted) {
          setStockData(response.data);
        }
      } catch (err) {
        // Handle error if needed
      }
    };

    fetchData(); // Call the fetchData function
  }, [symbol]);

  return (
    <div>
      {stockData && (
        <div className="row border  rounded shadow-sm p-4 mt-5">
          <div className="col">
            <div>
              <span className="fw-bold">Name : </span>
              {stockData.name}
            </div>
            <div>
              <span className="fw-bold">Country : </span>
              {stockData.country}
            </div>
            <div>
              <span className="fw-bold">Ticker :</span>
              {stockData.ticker}
            </div>
          </div>
          <div className="col">
            <div>
              <span className="fw-bold">Exchange : </span>
              {stockData.exchange}
            </div>
            <div>
              <span className="fw-bold">Industry : </span>
              {stockData.finnhubIndustry}
            </div>
            <div>
              <span className="fw-bold">IPO : </span>
              {stockData.ipo}
            </div>
          </div>
          <div className="col">
            <div>
              <span className="fw-bold">MarketCap : </span>
              {stockData.marketCapitalization}
            </div>
            <div>
              <span className="fw-bold">Shares Outstanding : </span>
              {stockData.shareOutstanding}
            </div>
            <div>
              <span className="fw-bold">url : </span>{" "}
              <a href={stockData.weburl}>{stockData.weburl}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

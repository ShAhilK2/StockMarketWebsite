import React, { useEffect, useRef, memo } from 'react';

export const ChartWidget = () =>{
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "Microsoft",
              "MSFT|1D"
            ],
            [
              "NASDAQ:NVDA|ALL"
            ],
            [
              "NASDAQ:TSLA|ALL"
            ],
            [
              "NASDAQ:AAPL|ALL"
            ],
            [
              "NASDAQ:COIN|ALL"
            ],
            [
              "NYSE:BABA|ALL"
            ],
            [
              "NASDAQ:NFLX|ALL"
            ],
            [
              "NYSE:ORCL|ALL"
            ],
            [
              "NASDAQ:GOOG|ALL"
            ],
            [
              "NYSE:DIS|ALL"
            ],
            [
              "NASDAQ:INTC|ALL"
            ],
            [
              "NASDAQ:ABNB|ALL"
            ],
            [
              "NYSE:UBER|ALL"
            ],
            [
              "BITSTAMP:BTCUSD|ALL"
            ]
          ],
          "chartOnly": false,
          "width": "1250",
          "height": "450",
          "locale": "en",
          "colorTheme": "light",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "11",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ]
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (

   
    <div className="tradingview-widget-container" style={{ overflow: "hidden", margin: "20px 0" }} ref={container}>
          <h2
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontFamily: "fantasy",
      color: "white",
      backgroundColor: "#1E293B",
      margin: "10px auto 0",
      padding: "10px", /* Optional: Adding padding for better readability */
    }}
   className='text-2xl'>
    Stock Overview
  </h2>

      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(ChartWidget);

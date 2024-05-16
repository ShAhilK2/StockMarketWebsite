// HeatMapWidget.jsx
import React, { useEffect, useRef } from 'react';

export const HeatMapWidget = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "exchanges": [],
        "dataSource": "SENSEX",
        "grouping": "sector",
        "blockSize": "market_cap_basic",
        "blockColor": "change|60",
        "locale": "en",
        "symbolUrl": "",
        "colorTheme": "light",
        "hasTopBar": false,
        "isDataSetEnabled": false,
        "isZoomEnabled": true,
        "hasSymbolTooltip": true,
        "width": "1176",
        "height": "450"
      }`;
    container.current.appendChild(script);

    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h2 className='text-2xl'
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
  >
    Stock HeatMap
    <div className="tradingview-widget-container flex justify-center" ref={container}></div>
  </h2>

     
    </div>
  );
};


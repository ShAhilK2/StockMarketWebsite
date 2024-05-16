import React, { useEffect, useRef } from 'react';

export const StockNewsWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "feedMode": "all_symbols",
      "isTransparent": false,
      "displayMode": "regular",
      "width": "1250",
      "height": "550",
      "colorTheme": "light",
      "locale": "en"
    });

    containerRef.current.appendChild(script);

    return () => {
      containerRef.current.removeChild(script);
    };
  }, []);

  return (
    <div>
 <div>
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
    Stock News
  </h2>

    </div>
   
    <div>
   
    
    <div className="tradingview-widget-container" ref={containerRef}></div>
    </div>
    </div>
   
    
  );
};

export default StockNewsWidget;

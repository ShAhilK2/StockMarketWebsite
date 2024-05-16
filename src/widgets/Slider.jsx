import React, { useEffect } from 'react';

export const Slider = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: '', proName: 'BITSTAMP:BTCUSD' },
        { description: '', proName: 'NASDAQ:TSLA' },
        { description: '', proName: 'NASDAQ:MSFT' },
        { description: '', proName: 'NASDAQ:GOOGL' },
        { description: '', proName: 'NASDAQ:COIN' },
        { description: '', proName: 'NASDAQ:NFLX' },
        { description: '', proName: 'NASDAQ:INTC' },
        { description: '', proName: 'NYSE:BABA' },
        { description: '', proName: 'NYSE:WMT' },
        { description: '', proName: 'NYSE:NKE' },
        { description: '', proName: 'AMEX:SPY' },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'compact', // Change 'adaptive' to 'compact' or any other suitable mode
      colorTheme: 'light',
      locale: 'en',
    });
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default Slider;

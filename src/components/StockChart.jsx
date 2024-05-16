import { useState } from "react";
import Chart from "react-apexcharts";

export const StockChart = ({ chartData, symbol }) => {
  const [dateFormat, setDateFormat] = useState("24h");

  const determineTimeFormat = () => {
    switch (dateFormat) {
      case "24h":
        return chartData.day;
      case "7d":
        return chartData.week;
      case "1Y":
        return chartData.year;
      default:
        return chartData.day;
    }
  };

  const getColor = () => {
    const data = determineTimeFormat();
    const firstPrice = data[0].y;
    const lastPrice = data[data.length - 1].y;

    return lastPrice > firstPrice ? "#26C281" : "#ed3419";
  };

  const options = {
    title: {
      text: symbol,
      align: "center",
      style: {
        fontSize: "24px",
        color: getColor(), // Set title color based on price movement
      },
    },
    chart: {
      id: "stock data",
      animations: {
        speed: 1300,
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false,
      },
    },
    tooltip: {
      x: {
        format: "MMM dd HH:mm",
      },
    },
  };

  const series = [
    {
      name: symbol,
      data: determineTimeFormat(),
      color: getColor(), // Set series color based on price movement
    },
  ];

  const renderButtonSelect = (button) => {
    const classes = "btn m-1 ";
    const activeClass = "btn-primary";
    const inactiveClass = "btn-outline-primary";

    return classes + (button === dateFormat ? activeClass : inactiveClass);
  };

  return (
    <div style={{ backgroundColor: "rgba(145,158,171,0.04)" }} className="mt-5 p-4 shadow-sm bg-blue-900 ">
      <Chart options={options} series={series} type="area" width="100%" />
      <div>
        <button className={renderButtonSelect("24h")} onClick={() => setDateFormat("24h")}>
          24h
        </button>
        <button className={renderButtonSelect("7d")} onClick={() => setDateFormat("7d")}>
          7d
        </button>
        <button className={renderButtonSelect("1Y")} onClick={() => setDateFormat("1Y")}>
          1Y
        </button>
      </div>
    </div>
  );
}

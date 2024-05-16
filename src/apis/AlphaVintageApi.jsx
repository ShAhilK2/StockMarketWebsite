import axios from "axios";

const API_KEY = "1CXKTURLESKP37Y8"; // Replace with your Alphavantage API key

export default axios.create({
  baseURL: "https://www.alphavantage.co/query",
  params: {
    apikey: API_KEY,
  },
});

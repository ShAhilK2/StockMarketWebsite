import axios from "axios"


const TOKEN = "cno8111r01qu79g53qn0cno8111r01qu79g53qng";
export default axios.create({
    baseURL : "https://finnhub.io/api/v1",
    params : {
       token :  TOKEN
}})



import FinnHubApi from "../apis/FinnHubApi"
import { useState,useEffect, useContext } from "react"
import { WatchListContext } from "../context/WatchListContext"

export function AutoComplete(){
    const [search,setSearch] = useState("")
    const [results,setResults] = useState([])
    const {addStock} = useContext(WatchListContext);
    
    const RenderDown = () => {
        const dropDownClass = search ? "show" : null;
        return (
            <ul style={{
                height : "500px",
                overflowY : "scroll",
                overflowX : "hidden",
                cursor : "pointer"
            }}  className={`dropdown-menu ${dropDownClass}`}>
                {results && results.map((result) => (
                    <li onClick={()=>{
                        addStock(result.symbol)
                        setSearch("")
                    }
                    } className="dropdown-item" key={result.symbol}>
                        {result.description} ({result.symbol})
                    </li>
                ))}
            </ul>
        );
    };
    
    
    useEffect(()=>{
        let isMounted  = true;
        const fetchData = async () =>{
            try{
                const response = await FinnHubApi.get("/search",{
                    params  :{
                        q: search
                    }
                })

                
                if(isMounted){
                    setResults(response.data.result)

                }else{
                    setResults([])
                }

            }
            catch(err){

            }
       
        }
        if(search.length>0){
            fetchData()

        }
        return() =>(isMounted = false)
            
        
        
        
    },[search])
      

    return(<div className="w-50 p-5 rounded mx-auto mt-10px">
        <div className="form-floating dropdown">
            <input style={{backgroundColor : "white" ,marginTop:"30px"}} 
            id="search" type="text" className="form-control" 
            placeholder="Search" autoComplete="off" value={search}
            

            onChange={(e)=>setSearch(e.target.value)}/>
            <label htmlFor="search">Search</label>
            {RenderDown()}
           

        </div>
        
        
    </div>)
}
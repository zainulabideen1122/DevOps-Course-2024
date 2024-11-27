import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "./Components/content";
import "./Style/app.css"

const App = ()=>
{
    
    const [data, setData] = useState([])

    useEffect(()=>{
        const request = ()=>
        { //https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false', {
                
                
            })
            .then((res)=>{
                setData(res.data)
                
            })
    
        }

        request();
    }, [])

    return(
        <div>
            <div className="links"><a className="website" href="https://zainnisar.netlify.app/" target="_blank" rel="noopener noreferrer">WEBSITE</a> | <a className="linkedin" href="https://www.linkedin.com/in/zainnisar/" target="_blank" rel="noopener noreferrer">LINKEDIN</a> | <a className="github" href="https://github.com/zainulabideen1122" target="_blank" rel="noopener noreferrer">GITHUB</a></div>
            <Content results={data}/>
        </div>
    )
}

export default App;
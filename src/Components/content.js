import React, { useState} from "react";
import '../Style/content.css'

const Content = (props)=>{

    const [term, setTerm] = useState('');

    

   

   var item = props.results.filter((result)=>eachIndex(result));

    function eachIndex(e){
        return e.id.includes(term.toLowerCase())
    }
    console.log(item)


    const display = item.map((result)=>{
        return (
    
            <div key={result.id}>
                <div className="coinHeader">
                    <span className="header">
                        <img src={result.image} alt={result.id}/>
                        <p className="title">{result.id}</p>
                    </span>
                    
                    <p className="">{result.current_price}</p>
                    <p className={result.price_change_percentage_24h < 0 ? 'red' : 'green'}>{result.price_change_percentage_24h }</p>
                    <p className="">{result.market_cap}</p>
                    
                </div>
                
            </div>
        )
       })

    return (
        <div>
            <center>
                <div className="searchBar">
                    <input onChange={(e)=>setTerm(e.target.value)} />
                    <button>Search</button>
                </div>
            </center>

            <nav className="navbar">
                <li>Coin Name</li>
                <li>Market Price</li>
                <li>Price Change per% (24-hr)</li>
                <li> Market Capital</li>
            </nav>

           {display}

        </div>
    )
}

export default Content;
import React from 'react'
import { useState,useEffect } from 'react'
import './Bitcoin.css'
const Bitcoin = () => {
    const [rank,setRank]=useState('1')
    const [dollar,setDollar]=useState(76000);
    const [inr,setInr]=useState(500000);
    const [percentage,setPercentage]=useState(1.5)
    const [imageUrl,setImageUrl]=useState();
    const [symbol,setSymbol]=useState();
    const [data,setData]=useState();

    useEffect(() => {
        const fetchBitcoinData = async () => {
            try {
              const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
              const result = await response.json();
              console.log(result);
              setData(result);
      
              
              setRank(result.market_cap_rank || 'N/A');
              setDollar(result.market_data.current_price.usd || 0);
              setInr(result.market_data.current_price.inr || 0);
              setPercentage(result.market_data.price_change_percentage_24h || 0);
              setImageUrl(result.image.small || '')
              setSymbol(result.symbol || '')
            } catch (error) {
              console.error('Error fetching Bitcoin data:', error);
            }
          };
          fetchBitcoinData();
    }, [])

    const formatNumber = (num) => {
        if (!num && num !== 0) return ''; 
        return num.toLocaleString('en-US'); 
      };
    
  return (
    <div className='bitcoin1'>
      <div className='top'>
        <div id='first'> 
            <div><img src={imageUrl} alt="img" /></div>  
            <div id='name' >Bitcoin <span id='symbol'>{symbol?.toUpperCase()}</span> </div> 
        </div>
        <div id='rank'>Rank #{rank}</div>
      </div>
      <div id='second'>
        <div id='price'>${formatNumber(dollar)}</div>
        <div id='percentage' >
            <span
             style={{backgroundColor:percentage>0 ? '#0AB27D0F' : '#EE68551A',
                color:percentage > 0 ? '#32BE88' : '#E96975',
                padding:8,
                borderRadius:4
            }}
            >{percentage>0?'▲':'▼' } {percentage.toFixed(2)}%</span> 
            {"  "}
            <span style={{
               color:'#768396'
            }}>
                (24)h
            </span>
        </div>
      </div>
      <div id='third'>
        ₹{formatNumber(inr)}
      </div>
    </div>
  )
}

export default Bitcoin

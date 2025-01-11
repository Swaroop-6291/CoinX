import React, { useEffect, useState } from 'react';
import './Footer.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Footer = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const result = await response.json();
        const coins = result.coins.map((coin) => ({
          id:coin.item.id,
          name: coin.item.name,
          symbol: coin.item.symbol,
          image: coin.item.small,
          price: coin.item.price_btc,
          graph:coin.item.data.sparkline,
          percentage:coin.item.data.price_change_percentage_24h.usd

        }));
        console.log(coins)
        setTrendingCoins(coins);
        console.log("result")
        console.log(result)
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  const formatNumber = (num) => {
    if (!num && num !== 0) return ''; // Handle undefined or null values
    return num.toLocaleString('en-US'); // Format with commas
  };

  return (
    <div className='footer'>
      <h2>You may also like</h2>
      <Carousel responsive={responsive} >
        {
          trendingCoins.map((coins,index)=>(
            <div key={coins.id} className='item'>
              <div className="top">
                <img src={coins.image} alt={coins.name} className='image' />
                <div
                   className='symbol'
                >{coins.symbol}</div>
                <div className="percent"
                   style={{backgroundColor:coins.percentage>0 ? '#0AB27D0F' : '#EE68551A',
                    color:coins.percentage > 0 ? '#32BE88' : '#E96975',
                    padding:8,
                    borderRadius:4,
                    width:84,
                    height:28,
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}
                >
                  {coins.percentage.toFixed(2)}%
                </div>
              </div>
              <div className="second"
                
              >
                ${(coins.price).toFixed(6)}
              </div>
              <div className="graph">
                 <img src={coins.graph} alt="graph" />
              </div>
            </div>
          ))
        }
      </Carousel>
      <h2>Trending Coins</h2>
      <Carousel responsive={responsive} className='crousel'>
        {
          trendingCoins.map((coins,index)=>(
            <div key={coins.id} className='item'>
              <div className="top">
                <img src={coins.image} alt={coins.name} className='image' />
                <div>{coins.symbol}</div>
                <div className="percent"
                  style={{backgroundColor:coins.percentage>0 ? '#0AB27D0F' : '#EE68551A',
                    color:coins.percentage > 0 ? '#32BE88' : '#E96975',
                    padding:8,
                    borderRadius:4,
                    width:84,
                    height:28,
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center'
                }}
                >
                  {coins.percentage.toFixed(2)}%
                </div>
              </div>
              <div className="second">
                ${(coins.price).toFixed(6)}
              </div>
              <div className="graph">
                 <img src={coins.graph} alt="graph" />
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  );
};

export default Footer;

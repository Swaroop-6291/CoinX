import React, { useEffect, useState } from 'react';
import './Trending.css';

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const result = await response.json();
        const coins = result.coins.slice(0, 3).map((coin) => ({
          name: coin.item.name,
          symbol: coin.item.symbol,
          image: coin.item.small,
          price: coin.item.price_btc, // Replace with actual price if available
          percentageChange: coin.item.data.price_change_percentage_24h.usd, // Replace with actual percentage change if available
        }));
        setTrendingCoins(coins);
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="trending">
      <h3>Top 3 Trending Coins</h3>
      <div className="coin-list">
        {trendingCoins.map((coin, index) => (
          <div id="item">
             <div key={coin.index} className="coinItem">
                <img src={coin.image} alt={coin.name} className='image' />
                <div>{coin.name} ({coin.symbol})</div>
            </div>
            <div className='detail'
             style={{backgroundColor:coin.percentageChange>0 ? '#0AB27D0F' : '#EE68551A',
                color:coin.percentageChange > 0 ? '#32BE88' : '#E96975',
                padding:8,
                borderRadius:4,
                width:84,
                height:28,
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}
            >
              {coin.percentageChange>0?'▲':'▼'}  {coin.percentageChange.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;

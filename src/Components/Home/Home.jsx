import React from 'react'
import Chart from './TradingChart/Chart'
import './Home.css'
import NavBar from './NavBar/NavBar'
import Performance from './Performance/Performance'
import Sentiment from './Sentiment/Sentiment'
import About from './About/About'
import Tokenomics from './Tokenomics/Tokenomics'
import Team from './Team/Team'
import FirstPart from './RightPart/FirstPart'
import Trending from './RightPart/Trending'
import Bitcoin from './Bitcoin/Bitcoin'
const Home = () => {
  return (
    <div className='home'>
      <h1>Cryptocurrencies</h1>
      <div className='container' >
        <div id='left'>
            <div id="first">
              <Bitcoin/>
              <hr />
              <Chart/>
            </div>
            <NavBar/>
           <Performance/>
           <Sentiment/>
           <About/>
           <Tokenomics/>
           <Team/>
        </div>
        <div id='right'>
            <FirstPart/>
            <Trending/>
        </div>
      </div>
    </div>
  )
}

export default Home
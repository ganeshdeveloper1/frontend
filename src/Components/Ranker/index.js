import React from 'react'
import './ranker.css'
import token from '../../assets/token.png'
import Graph from '../../assets/Graph.png'
import data from '../../assets/Graph1.png'
import badge from '../../assets/Badge.png'

const Ranker = () => {
  return (
    <div className='ranker'>
      <div className='upper-sec'>
        <img src={token} alt='token' id='token' />
        <img src={Graph} alt='graph1' />
        <img src={data} alt='graph1' />
      </div>
      <p>
        RANKERS <span>BADGE</span>
      </p>
      <img src={badge} alt='badge' />
    </div>
  )
}

export default Ranker

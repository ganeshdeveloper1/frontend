import React from 'react'
import './home.css'
import credImg from '../../assets/wall.jpg'
import mockup from '../../assets/mockup.jpg'
import bottomImg from '../../assets/bottomImg.png'
import cyball from '../../assets/cyball.png'
import axie from '../../assets/axie.png'
import pregaxy from '../../assets/pregaxy.png'
import wonderhero from '../../assets/wonderhero.png'

const Home = () => {
  return (
    <div className='home'>
      <section className='top-sec'>
        <img src={credImg} alt='cred-img' />
      </section>
      <section className='middle-sec'>
        <div className='left'>
          <h1>LIFE IS A GAME BOARD.</h1>
          <h3>
            Time is your opponent. If you procrastinate, you will lose the game.
            You must make a move to be victorious.
          </h3>
          <button>JOIN WITH US</button>
        </div>
        <div className='right'>
          <img src={mockup} alt='mockup' />
        </div>
      </section>
      <section className='last-sec' id='mr-top'>
        <div className='leftContent'>
          <img src={bottomImg} alt='img' />
        </div>
        <div className='rightContent'>
          <h1 className='light-header'>
            GET YOUR
            <br />
            <span id='dark-header'>GAMES</span>
          </h1>
          <p className='para'>
            We currently owned 1000+ gaming NFTs and will add more in the
            future. You are free to explore each world according to your own
            tactics and gameplay
          </p>
          <div className='gameBtn'>
            <a href='#'>
              <img src={cyball} alt='cyball' />
            </a>
            <a href='#'>
              <img src={pregaxy} id='pregaxy' alt='pregaxy' />
            </a>
            <a href='#'>
              <img src={axie} alt='axie' />
            </a>
            <a href='#'>
              <img src={wonderhero} alt='wonderhero' />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

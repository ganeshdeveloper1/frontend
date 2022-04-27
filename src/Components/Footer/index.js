import React from 'react'
import './footer.css'
import footerImg from '../../assets/footer.jpg'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={footerImg} alt='footer-img' />
      <div className='alignRight'>
        <ul className='column1'>
          <li className='footer-item'>
            <a href='/'>HOME</a>
          </li>
          <li className='footer-item'>
            <a href='https://discord.com/?msclkid=420a4fc7c56811ec906a3e372d297abf'>
              DISCORD
            </a>
          </li>
          <li className='footer-item'>
            <a href='https://webk.telegram.org/?msclkid=5319cf2cc56911ec8711208b26f3b8b6'>
              TELEGRAM
            </a>
          </li>
          <li className='footer-item'>
            <a href='https://twitter.com/GaneshTiwary13?t=Xli4cLUGfvC7kIcbYMnNmw&s=08'>
              TWITTER
            </a>
          </li>
        </ul>
        <ul className='column2'>
          <li className='footer-item'>
            <a href='#'>MINT BADGE</a>
          </li>
          <li className='footer-item'>
            <a href='https://www.instagram.com/rohittiwari7262/'>INSTAGRAM</a>
          </li>
          <li className='footer-item'>
            <a href='/ranker'>$RANKER</a>
          </li>
          <li className='footer-item'>
            <a href='#' download='../../assets/Source file.pdf'>
              DOWNLOAD
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer

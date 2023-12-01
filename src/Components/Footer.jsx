import React from 'react'
import imageFacebook from "../../src/images/face2.png"
import imageDigital from "../../src/images/DH.png"
import imageInstagram from "../../src/images/instagram.png"
import imageTiktok from "../../src/images/tiktok.png"
import imageWhatsap from "../../src/images/whatsapp-square-logo-24.png"
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div>
      <div className='lineaFooter'>Fronted3-React</div>
      <footer className='footer'>
       
        <img className='digital' src={imageDigital} alt="facebook" />
        <Link to='/'><img className='facebook' src={imageFacebook} alt="facebook" /></Link>
        <Link to='/'><img className='instagram' src={imageInstagram} alt="facebook" /></Link>
        <Link to='/'> <img className='tiktok' src={imageTiktok} alt="facebook" /></Link>
        <Link to='/'> <img className='whatsap' src={imageWhatsap} alt="facebook" /></Link>
        
    </footer>
    </div>
    
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
       <footer>
       <div class="footer-copyright">
            <div class="container">
            © 2023 Copyright Text  
            <Link class="grey-text text-lighten-4 right" to='/'>  More Links</Link>
            </div>
          </div>
       </footer>
    </>
  )
}

export default Footer

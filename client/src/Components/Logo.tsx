import React from 'react'

import './Logo.css'

const Logo = () => {
  return (
    <div className='logo-div-wrapper'>
        <a href='/' className='logo-wrapper'>
            <div className='logo-img-wrapper'>
                <img id='logo-img' src='/grpnaem-Logo.png'></img>
                <a>GrpNaem</a>
            </div>
        </a>
    </div>
  )
}

export default Logo
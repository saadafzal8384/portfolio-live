import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub}  from 'react-icons/fa'
import {ImInstagram} from 'react-icons/im'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkendin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com" target="_blank"><ImInstagram/></a>
    </div>
  )
}

export default HeaderSocials
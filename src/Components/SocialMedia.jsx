import React from 'react'
import { BsLinkedin, BsGithub, BsTelegram } from 'react-icons/bs';

const SocialMedia = () => {

  return (
    <div className='app__social'>
        <div>
          <a 
          href="https://www.linkedin.com/in/nikolaos-koukas-5704b6210/"
          target="_blank"
          rel="noreferrer"
          >
          <BsLinkedin />
          </a>
        </div>
        <div>
        <a 
          href="https://github.com/nickcookies"
          target="_blank"
          rel="noreferrer"
          >
            <BsGithub/>
          </a>
        </div>
        <div>
        <a 
          href="https://t.me/nikosNcookiejar"
          target="_blank"
          rel="noreferrer"
          >
            <BsTelegram/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia
import React from 'react'
import '../styles/footer.scss'
import {AiFillGithub, AiFillLinkedin, AiOutlineArrowUp} from 'react-icons/ai'

const Footer = () => {
  return <footer>

    <div>
      <h3>Copyright © 2023. All rights are reserved</h3>    

   
        <div>
        <a href='https://github.com/shivansh-sh' target={"blank"}><AiFillGithub/></a>
        <a href='https://www.linkedin.com/in/shivansh-chauhan-aa56671b8/' target={"blank"}><AiFillLinkedin/></a>
        </div>
   
   <div>

    <a href='#home'>< AiOutlineArrowUp/></a>
   </div>
  
    </div>
  </footer>
}

export default Footer
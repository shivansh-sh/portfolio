import React from 'react'
import "../styles/header.scss"
import {AiOutlineMenu} from 'react-icons/ai'

const Header = ({menuOpen, setMenuOpen}) => {
  return(
    <>
    <div >
    <NavContent setMenuOpen={setMenuOpen} />
  </div>

  <button className="navBtn" onClick={()=> setMenuOpen(!menuOpen)} > 
  <AiOutlineMenu />
    </button>

    </>
  )
  }

 export const HeaderPhone = ({menuOpen, setMenuOpen}) =>{
    return(
      <div className={`navPhone ${menuOpen? "navPhoneComes" : "" }`}>
      <NavContent setMenuOpen={setMenuOpen}/>
      </div>
    )
  }

  const NavContent = ({setMenuOpen}) => (
    <>
    <nav className='header'>
      <h1>Shivansh.</h1>
      <ul>
        <li><a onClick={()=> setMenuOpen(false)} href='/#home'>Home</a></li>
        <li><a onClick={()=> setMenuOpen(false)} href='/#projects'>Projects</a></li>
        <li><a onClick={()=> setMenuOpen(false)} href='/#about'>About</a></li>
        <li><a onClick={()=> setMenuOpen(false)} href='/#contact'>Contact</a></li>
      </ul>       
    </nav>
    </>
  )
  

export default Header
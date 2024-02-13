import React from 'react'
import './navbar.css'
import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-logo">
        <img src={logo} alt="navbar__logo" />
      </div>

      <ul className="gpt3__navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#wgpt3">What is GPT3?</a></li>
        <li><a href="#features">Open AI</a></li>
        <li><a href="#possibilities">Case Studies</a></li>
        <li><a href="#blog">Library</a></li>
      </ul>

      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className="gpt3__navbar-mobilemenu">
        {
          toggleMenu
            ?
            <RiCloseLine size={30} color="#fff" onClick={() => setToggleMenu(false)} />
            :
            <RiMenu3Line size={30} color="#fff" onClick={() => setToggleMenu(true)} />
        }

        {
          toggleMenu && (
            <div className="gpt3__navbar-mobilemenu_overlay scale-up-center">
              <ul className="gpt3__navbar-mobilemenu_overlay-links">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#wgpt3" onClick={() => setToggleMenu(false)}>What is GPT3?</a></li>
                <li><a href="#features" onClick={() => setToggleMenu(false)}>Open AI</a></li>
                <li><a href="#possibilities" onClick={() => setToggleMenu(false)}>Case Studies</a></li>
                <li><a href="#blog" onClick={() => setToggleMenu(false)}>Library</a></li>
              </ul>
              <div className="gpt3__navbar-mobilemenu_overlay-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar

// import React, { Profiles } from 'react'
import home from '../home.PNG'
import messenger from '../messenger.PNG'
import add from '../add.PNG'
import explore from '../explore.PNG'
import like from '../like.PNG'
import style from '../styles/Header.module.css'


const Nav = () => {
  return (
    <div className={style.navBox}>
        <img src={home} alt="icon" />
        <img src={messenger} alt="icon" />
        <img src={add} alt="icon" />
        <img src={explore} alt="icon" />
        <img src={like} alt="icon" />
        <img src={explore} alt="icon" />
    </div>
  )
}

export default Nav
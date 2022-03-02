
import home from '../home.PNG'
import messenger from '../messenger.PNG'
import add from '../add.PNG'
import explore from '../explore.PNG'
import like from '../like.PNG'
import style from '../styles/Header.module.css'
import Newpost from './newpost'

import {useState , useEffect} from 'react'
// import girl from '../girl.jpg'


const Nav = () => {
  const [displaystyle , setdisplaystyle] = useState({display : "none"});
  console.log(displaystyle)


   return (
    
    <div className={style.navBox}>
        <img src={home} alt="icon" />
        <img src={messenger} alt="icon" />
        <img src={add} alt="icon" onClick={()=>{
          if(displaystyle.display === 'none'){
          setdisplaystyle({display:'block'})}
          if(displaystyle.display === 'block'){
            setdisplaystyle({display:'none'})}
          
        }} />
        <img src={explore} alt="icon" />
        <img src={like} alt="icon" />
        {/* <img src={girl} alt="icon" /> */}
        <div style={displaystyle}>
        <Newpost />
        </div>
    </div>
  )
}

export default Nav
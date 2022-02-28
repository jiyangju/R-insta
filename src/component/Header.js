import style from '../styles/Header.module.css'
import Search from './Search'
import Nav from './Nav'
import logo from '../logo.PNG'

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.headerBox}>
       <img src={logo} alt="Logo" />
        <Search/>
        <Nav/>
      </div>
    </div>
  )
}

export default Header
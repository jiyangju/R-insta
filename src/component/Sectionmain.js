import MainArea from './MainArea'
import Sidebar from './Sidebar'
import style from '../styles/SectionMain.module.css'

const SectionMain = () => {
  return (
    <div className={style.main}>
        <MainArea/>
        <Sidebar/>
    </div>
  )
}

export default SectionMain
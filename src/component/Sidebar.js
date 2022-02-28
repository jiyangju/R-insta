import Selfprofile from './Selfprofile'
import Suggestions from './Suggestions'
import styles from '../styles/Sidebar.module.css'
import {suggest}  from '../data/suggest'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Selfprofile/>
      {suggest.map(item => <Suggestions item={item}/>)}
    </div>

  )
}

export default Sidebar
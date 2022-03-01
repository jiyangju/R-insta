import Selfprofile from './Selfprofile'
import Suggestions from './Suggestions'
import styles from '../styles/Sidebar.module.css'
import {suggest}  from '../data/suggest'
import ForYou from './ForYou'

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Selfprofile/>
      <ForYou/>
      {suggest.map((item, index) => <Suggestions key={index} item={item}/>)}
    </div>

  )
}

export default Sidebar
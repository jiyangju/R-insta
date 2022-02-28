import StatusBlock from './StatusBlock'
import Post from './Post'
import styles from '../styles/MainArea.module.css'
import {feed} from '../data/feed'

// TODO: useState and useEffect to use the data

const MainArea = () => {
  return (
    <div className={styles.container}>
        <StatusBlock/>
        {feed.map(item => <Post post={item}/>)}
    </div>
  )
}

export default MainArea
import {useState, useEffect} from 'react'
import StatusBlock from './StatusBlock'
import Post from './Post'
import styles from '../styles/MainArea.module.css'

const MainArea = () => {
  const [feed, setFeed] = useState([])

  useEffect(() => fetchData(), [])

  const fetchData = async () => {
    const response = await fetch('http://localhost:8000/api/v1/feed')
    const data = await response.json()
    setFeed(data)
  }

  return (
    <div className={styles.container}>
        <StatusBlock/>
        {feed.length > 0 ?
            feed.map((item, index)=> <Post key={index} post={item}/>)
            : 'Loading...'
        }
    </div>
  )
}

export default MainArea
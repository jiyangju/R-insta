import { useEffect, useState } from 'react'
import Selfprofile from './Selfprofile'
import Suggestions from './Suggestions'
import styles from '../styles/Sidebar.module.css'
import ForYou from './ForYou'

const Sidebar = () => {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => fetchUsers(), [])

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:8000/api/v1/users')
    const users = await response.json()
    setSuggestions(users)
  }

  return (
    <div className={styles.container}>
      <Selfprofile/>
      <ForYou/>
      {suggestions.length > 0 ?
          suggestions.map((item, index) => <Suggestions key={index} item={item}/>)
          : 'Loading...'
      }
    </div>

  )
}

export default Sidebar
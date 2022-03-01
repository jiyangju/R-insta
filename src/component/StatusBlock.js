import styles from '../styles/StatusBlock.module.css'
import { useEffect, useState } from 'react'
import Status from './Status'


const StatusBlock = () => {
  const [status, setSuggestions] = useState([])
  useEffect(() => fetchUsers(), [])

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:8000/api/v1/users')
    const users = await response.json()
    setSuggestions(users)
  }
  return (
    <div className={styles.container}>
      
      {status.length > 0?
          status.map((item, index) => <Status key={index} item={item}/>)
          : 'Loading...'
      }
    
    </div>
    
  )
}

export default StatusBlock
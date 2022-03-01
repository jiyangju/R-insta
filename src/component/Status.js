
import styles from '../styles/StatusBlock.module.css'

const Status = ({item}) => {
  return (
      <div className={styles.selfProfile}>
          <div className={styles.profilePic}>
              <img src={item.imageUrl} alt="DP"/>
          </div>
          <div>
              <p>{item.name}</p>
          </div>

      </div>
  )
}

export default Status
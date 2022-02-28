
import styles from '../styles/Suggestions.module.css'

const Suggestions = ({item}) => {
  return (
    <div className={styles.container}> 
      {/* <div className={styles.Suggestions}>
        <p class="SuggestionsText">Suggestions for you</p>
      </div> */}
      <div className={styles.selfProfile}>
          <div className={styles.profilePic}>
              <img src={item.imageUrl} alt="DP"/>
          </div>
          <div className={styles.info}>
            <p className={styles.username}>{item.name}</p>
            <p className={styles.subText}>Followed by User</p>
          </div>
          <button className={styles.actionBtn}>Follow</button>
      </div>
    </div>
  )
}

export default Suggestions
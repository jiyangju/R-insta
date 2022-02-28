
import styles from '../styles/Suggestions.module.css'

const Suggestions = ({item}) => {
  return (
    <div className={styles.container}> 
        <p class="SuggestionsText">Suggestions for you</p>
           <div className={styles.selfProfile}>
                <div className={styles.profilePic}>
                    <img src={item.user.imageUrl} alt="DP"/>
                </div>
                <div>
                    <p className={styles.username}>Grace</p>
                    <p className={styles.subText}>Followed by User</p>
                </div>
                <button className={styles.actionBtn}>Follow</button>
            </div>
    </div>
  )
}

export default Suggestions
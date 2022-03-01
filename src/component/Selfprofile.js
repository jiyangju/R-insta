import styles from '../styles/Selfprofile.module.css'
import girl from './girl.jpg'


const Selfprofile = (item) => {
  return (
    <div className={styles.selfProfile}>
          <div className={styles.profilePic}>
               {/* <img src={./girl.jpg} alt="DP"/> */ }
              <img src={girl} alt="girl"/>
          </div>
          <div className={styles.info}>
            <p className={styles.username}>Alia Bhatt</p>
          </div>
          <button className={styles.actionBtn}>Switch</button>
      </div>
      
    
  )
}

export default Selfprofile
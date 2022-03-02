import styles from '../styles/StatusBlock.module.css'

const Status = ({item}) => {
  return (
      <div className={styles.selfProfile}>
        <img src={item.imageUrl} alt="DP"/>
        <p className={styles.nameText}>{item.name}</p>
      </div>
  )
}

export default Status
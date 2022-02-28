import styles from '../styles/Post.module.css'

const Post = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <div className={styles.user}>
                <div className={styles.profilePic}>
                    <img src={post.user.imageUrl} alt="DP"/>
                </div>
                <p className={styles.username}>{post.user.name}</p>
            </div>
            <img className={styles.options} src="https://cdn-icons-png.flaticon.com/512/17/17764.png" alt=""/>
        </div>
        <img className={styles.postImage} src={post.post.imageUrl} alt="content image"/>
        <div className={styles.postContent}>
            <div className={styles.reactionWrapper}>
                <img src="https://icons-for-free.com/iconfiles/png/512/heart-131965017458786724.png" alt="" className={styles.icon}/>
                <img src="https://listimg.pinclipart.com/picdir/s/571-5717511_comment-instagram-icon-png-clipart.png" alt="" className={styles.icon}/>
                <img src="https://www.vhv.rs/dpng/d/535-5351493_paper-plane-instagram-send-icon-png-transparent-png.png" alt="" className={styles.icon}/>
                <img src="https://w7.pngwing.com/pngs/440/362/png-transparent-computer-icons-bookmark-symbol-bookmark-miscellaneous-angle-text.png" alt="" className={styles.icon}/>
            </div>
                    <p className={styles.likes}>{post.post.likes}</p>
                    <p className={styles.description}><span></span>{post.post.caption}</p>
                    <p className={styles.postTime}>2 minutes ago</p>
        </div>
        <div className={styles.commentWrapper}>
            <img src="http://simpleicon.com/wp-content/uploads/smile-256x256.png" className={styles.icon} alt="" />
            <input type="text" className={styles.commentBox} placeholder="Add a comment" />
            <button className={styles.commentBtn}>post</button>
        </div>
    </div>
  )
}

export default Post
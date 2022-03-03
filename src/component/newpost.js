import React from 'react'
import style from '../styles/newpostform.module.css'

const Newpost = () => {
  return (
      <div className={style.postbox}>
          <form>
              <label>
                  enter your name:
                  <input type={'text'}/>
              </label>
              <label>
                  enter image url:
                  <input type={'content'}/>
              </label>
              <button className={style.buttonsubmit}>submit</button>
          </form>
      </div>
  )
}

export default Newpost
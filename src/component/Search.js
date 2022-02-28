import React from 'react'
import style from '../styles/Header.module.css'

const Search = () => {
  return (
    <div>
        <input type="text" className ={style.searchBox} placeholder="search" />
    </div>
  )
}

export default Search
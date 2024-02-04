import React from 'react'
import styles from "../../../../styling/StartPageStyle.module.css"
import Slideshow from '../individuals/Slideshow'
import NewProducts from '../individuals/NewProducts'

function StartPageContainer() {
  return (
    <div className='startpageContainer'>
      <Slideshow />
      <NewProducts />
    </div>
  )
}

export default StartPageContainer
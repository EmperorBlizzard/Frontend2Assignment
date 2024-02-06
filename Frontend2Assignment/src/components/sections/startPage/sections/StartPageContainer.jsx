import React from 'react'
import styles from "../../../../styling/StartPageStyle.module.css"
import Slideshow from '../individuals/Slideshow'
import NewProductsContainer from '../individuals/NewProductsContainer'

function StartPageContainer() {
  return (
    <div className='startpageContainer'>
      <Slideshow />
      <NewProductsContainer />
    </div>
  )
}

export default StartPageContainer
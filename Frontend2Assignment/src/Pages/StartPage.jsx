import React from "react"
import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer"
import StartPageContainer from "../components/sections/startPage/sections/StartPageContainer"
import styles from "../styling/StartPageStyle.module.css"

function StartPage() {
  return (
    <div>
      <Header />
        <h2>StarPage</h2>
        <StartPageContainer />
      <Footer />
    </div>
  )
}

export default StartPage
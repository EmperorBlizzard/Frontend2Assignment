import React from 'react'
import EmilEmail from '../MailService/EmilEmail'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'

function EmailTestPage() {
  return (
    <div>
      <Header />
      <EmilEmail />
      <Footer />
    </div>
  )
}

export default EmailTestPage
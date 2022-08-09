import React from 'react'
import { Button } from '@mantine/core'
import Homepage from './Homepage'
import ContactInformation from './ContactInformation'

function App() {
  const [showHomepage, setShowHomepage] = React.useState(true)
  const [showContactInfo, setShowContactInfo] = React.useState(false)
  // Contact Information
  const [contactInfo, setContactInfo] = React.useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    city: '',
    stateOrProvince: '',
    country: '',
    postalCode: '',
    email: '',
    linkedInURL: '',
  })
  console.log(contactInfo)

  return (
    <div>
      {showHomepage && <Homepage setShowHomepage={setShowHomepage} setShowContactInfo={setShowContactInfo} />}
      {showContactInfo && <ContactInformation contactInfo={contactInfo} setContactInfo={setContactInfo} />}
    </div>
  )
}

export default App

import React from 'react'
import Homepage from './Homepage'
import ContactInformation from './ContactInformation'
import Skills from './Skills'

function App() {
  const [showHomepage, setShowHomepage] = React.useState(true)
  const [showContactInfo, setShowContactInfo] = React.useState(false)
  // Create a toggle function when page before skills is complete
  const [showSkills, setShowSkills] = React.useState(false)
  const [workAndVolExperience, setWorkAndVolExperience] = React.useState(false)
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
  // Skills
  const [skills, setSkills] = React.useState([])

  return (
    <div>
      {showHomepage && <Homepage setShowHomepage={setShowHomepage} setShowContactInfo={setShowContactInfo} />}
      {showContactInfo && <ContactInformation contactInfo={contactInfo} setContactInfo={setContactInfo} />}
      {showSkills && <Skills skills={skills} setSkills={setSkills} />}
    </div>
  )
}

export default App

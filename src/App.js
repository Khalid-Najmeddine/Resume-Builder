import React from 'react'
import Homepage from './Homepage.js'
import ContactInformation from './ContactInformation.js'
import Skills from './Skills.js'
import Education from './Education.js'
import Qualifications from './Qualifications.js'
import WorkExperienceInformation from './WorkExperience.js'
import Awards from './Awards.js'
// import ResumePreview from './ResumePreview.js'!

function App() {
  const [showPages, setShowPages] = React.useState({
    showHomepage: true,
    showContactInfo: false,
    showEducationInfo: false,
    showQualificationsInfo: false,
    showSkillsInfo: false,
    showWorkExpInfo: false,
    showAwardsInfo: false,
    showResumePreview: false,
  })

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

  // Education Information
  const [educationInfo, setEducationInfo] = React.useState([])

  //Summary of Qualifications
  const [qualificationsInfo, setQualificationsInfo] = React.useState([])

  // Skills
  const [skillsInfo, setSkillsInfo] = React.useState([])

  // Work Experience
  const [workExperienceInfo, setWorkExperienceInfo] = React.useState([])

  // Awards
  const [awardsInfo, setAwardsInfo] = React.useState([])

  // Resume Preview
  // const [resumePreview, setResumePreview] = React.useState([])

  // console.log(showPages)
  console.log(contactInfo)
  // console.log(educationInfo)
  // console.log(skillsInfo)
  // console.log(qualificationsInfo)
  // console.log(workExperienceInfo)
  // console.log(awardsInfo)
  // console.log(resumePreview)

  return (
    <div>
      {showPages.showHomepage && <Homepage setShowPages={setShowPages} />}
      {showPages.showContactInfo && (
        <ContactInformation setShowPages={setShowPages} contactInfo={contactInfo} setContactInfo={setContactInfo} />
      )}
      {showPages.showEducationInfo && (
        <Education setShowPages={setShowPages} educationInfo={educationInfo} setEducationInfo={setEducationInfo} />
      )}
      {showPages.showQualificationsInfo && (
        <Qualifications
          setShowPages={setShowPages}
          qualifications={qualificationsInfo}
          setQualificationsInfo={setQualificationsInfo}
        />
      )}
      {showPages.showSkillsInfo && <Skills setShowPages={setShowPages} skills={skillsInfo} setSkills={setSkillsInfo} />}
      {showPages.showWorkExpInfo && (
        <WorkExperienceInformation
          setShowPages={setShowPages}
          workExperienceInfo={workExperienceInfo}
          setWorkExperienceInfo={setWorkExperienceInfo}
        />
      )}
      {showPages.showAwardsInfo && <Awards setShowPages={setShowPages} awards={awardsInfo} setAwards={setAwardsInfo} />}
      {/* {showPages.showResumePreview && <ResumePreview setShowPages={setShowPages} />} */}
    </div>
  )
}

export default App

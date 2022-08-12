//Contact Information !!
import React from 'react'
import { Button, TextInput } from '@mantine/core'

function EducationInformation(props) {
  const { setShowPages, educationInfo, setEducationInfo } = props
  const [education, setEducation] = React.useState({
    collegeOrUniversity: '',
    fieldOfStudy: '',
    degreeOrProgram: '',
    city: '',
    stateOrProvince: '',
    country: '',
    postalCode: '',
    email: '',
    linkedInURL: '',
  })

  function addEducation() {
    setEducationInfo((prevEducationInfo) => [...prevEducationInfo, education])
    // setEducation('')
  }

  function deleteEducation() {
    setEducationInfo((prevEducationInfo) => [...prevEducationInfo.slice(0, -1)])
  }

  function backToContactInformation() {
    setShowPages((prev) => ({
      ...prev,
      showEducationInfo: !prev.showEducationInfo,
      showContactInfo: !prev.showContactInfo,
    }))
  }

  function continueToQualifications() {
    setShowPages((prev) => ({
      ...prev,
      showEducationInfo: !prev.showEducationInfo,
      showQualificationsInfo: !prev.showQualificationsInfo,
    }))
  }

  return (
    <div>
      <h1> Education </h1>
      <form>
        <TextInput
          value={education.collegeOrUniversity}
          placeholder="University of Calgary"
          label="College/University"
          required
          onChange={(event) => setEducation({ ...education, collegeOrUniversity: event.currentTarget.value })}
        />
        <TextInput
          value={education.fieldOfStudy}
          placeholder="Software Engineering"
          label="Field of Study"
          required
          onChange={(event) => setEducation({ ...education, fieldOfStudy: event.currentTarget.value })}
        />
        <TextInput
          value={education.degreeOrProgram}
          placeholder="Bachelor's Degree"
          label="Degree/Program"
          required
          onChange={(event) => setEducation({ ...education, degreeOrProgram: event.currentTarget.value })}
        />
        <TextInput
          value={education.city}
          placeholder="Calgary"
          label="City"
          required
          onChange={(event) => setEducation({ ...education, city: event.currentTarget.value })}
        />
        <TextInput
          value={education.stateOrProvince}
          placeholder="Alberta"
          label="State or Province"
          required
          onChange={(event) => setEducation({ ...education, stateOrProvince: event.currentTarget.value })}
        />
        <TextInput
          value={education.country}
          placeholder="Canada"
          label="Country"
          required
          onChange={(event) => setEducation({ ...education, country: event.currentTarget.value })}
        />
        <TextInput
          value={education.graduationMonth}
          placeholder="June"
          label="Graduation Month"
          required
          onChange={(event) => setEducation({ ...education, graduationMonth: event.currentTarget.value })}
        />
        <TextInput
          value={education.graduationYear}
          placeholder="2017"
          label="Graduation Year"
          required
          onChange={(event) => setEducation({ ...education, graduationYear: event.currentTarget.value })}
        />
        <div className="education-button-container">
          <Button size="md" onClick={addEducation}>
            Add Education
          </Button>
          <Button size="md" onClick={deleteEducation}>
            Delete Education
          </Button>
        </div>
        <div className="educationSection-button-container">
          <Button size="md" onClick={backToContactInformation}>
            Go Back to Professional Contact Information Section
          </Button>
          <Button size="md" onClick={continueToQualifications}>
            Continue to Summary of Qualifications Section
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EducationInformation

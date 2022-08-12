//Work Experience !!
import React from 'react'
import { Button, Center, TextInput } from '@mantine/core'

function workExperienceInformation(props) {
  const {setSkillset, educationInfo, setWorkExperienceInfo, setWorkExpInfo, setAwards,} = props
  const [workExperience, setWorkExperience] = React.useState('')

  function addWorkExperience() {
    setWorkExpInfo((prevWorkExperience) => [...prevWorkExperience, workExperience])
    setWorkExperience('')
  }

  function deleteWorkExperience() {
    setWorkExpInfo((prevWorkExperience) => [...prevWorkExperience.slice(0, -1)])
  }

  function backToSkills() {
    setWorkExperienceInfo((prev) => !prev)
    setSkillset((prev) => !prev)
  }

  function continueToAwards() {
    setWorkExperienceInfo((prev) => !prev)
    setAwards((prev) => !prev)
  }

  return (
    <div>
      <h1> Education </h1>
      <form>
        <Center>
          <TextInput
            value={educationInfo.collegeOrUniversity}
            placeholder="University of Calgary"
            label="College/University"
            required
            onChange={(event) => setEducationInfo({ ...educationInfo, firstName: event.currentTarget.value })}
          />
          <TextInput
            value={educationInfo.fieldOfStudy}
            placeholder="Software Engineering"
            label="Field of Study"
            required
            onChange={(event) => setEducationInfo({ ...educationInfo, lastName: event.currentTarget.value })}
          />
          <TextInput
            value={educationInfo.degreeOrProgram}
            placeholder="Bachelor's Degree"
            label="Degree/Program"
            required
            onChange={(event) => setEducationInfo({ ...educationInfo, phoneNumber: event.currentTarget.value })}
          />
          <TextInput
            value={educationInfo.city}
            placeholder="Calgary"
            label="City"
            required
            onChange={(event) => setEducationInfo({ ...educationInfo, city: event.currentTarget.value })}
          />
          <TextInput
            value={educationInfo.stateOrProvince}
            placeholder="Alberta"
            label="State or Province"
            required
            onChange={(event) => setEducationInfo({ ...educationInfo, stateOrProvince: event.currentTarget.value })}
          />
          <TextInput
            value={educationInfo.country}
            placeholder="Canada"
            label="Country"
            required
            onChange={(event) => setEducationInfo({ ...educationInfo, country: event.currentTarget.value })}
          />
          <TextInput
            value={educationInfo.graduationMonth}
            placeholder="June"
            label="Graduation Month"
            required
            onChange={(event) => setEducationInfo({ ...educationInfo, postalCode: event.currentTarget.value })}
          />
          <TextInput
            value={educationInfo.graduationYear}
            placeholder="2017"
            label="Graduation Year"
            required
            onChange={(event) => setEducationInfo({ ...educationInfo, email: event.currentTarget.value })}
          />
        </Center>
        <div className="workExperience-button-container">
          <Button size="md" onClick={addWorkExperience}>Add Work Experience</Button>
          <Button size="md" onClick={deleteWorkExperience}>Delete Work Experience</Button>
        </div>
        <div className="workExperienceSection-button-container">
          <Button size="md" onClick={backToSkills}>Go Back to Ultimate Resume Builder Homepage Section</Button>
          <Button size="md" onClick={continueToAwards}>Continue to Summary of Qualifications Section</Button>
        </div>
      </form>
    </div>
  )
}

export default workExperienceInformation
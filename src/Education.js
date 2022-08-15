//Contact Information !!
import React from 'react'
import { Button, TextInput, Card, Text, SimpleGrid } from '@mantine/core'

function EducationInformation(props) {
  const { setShowPages, educationInfo, setEducationInfo } = props
  const [education, setEducation] = React.useState({
    collegeOrUniversity: '',
    fieldOfStudy: '',
    degreeOrProgram: '',
    city: '',
    stateOrProvince: '',
    country: '',
    gradMonth: '',
    gradYear: '',
  })

  function addEducation() {
    setEducationInfo((prevEducationInfo) => [...prevEducationInfo, education])
    setEducation({
      collegeOrUniversity: '',
      fieldOfStudy: '',
      degreeOrProgram: '',
      city: '',
      stateOrProvince: '',
      country: '',
      gradMonth: '',
      gradYear: '',
    })
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

  const educationElements = educationInfo.map((education) => {
    return (
      <Card shadow="sm" p="lg" radius="md" withBorder key={education.collegeOrUniversity}>
        <Text>
          <strong>College/University:</strong> {education.collegeOrUniversity}
        </Text>
        <Text>
          <strong>Field of Study:</strong> {education.fieldOfStudy}
        </Text>
        <Text>
          <strong>Degree/Program:</strong> {education.degreeOrProgram}
        </Text>
        <Text>
          <strong>City:</strong> {education.city}
        </Text>
        <Text>
          <strong>State/Province:</strong> {education.stateOrProvince}
        </Text>
        <Text>
          <strong>Country:</strong> {education.country}
        </Text>
        <Text>
          <strong>Grad Month:</strong> {education.gradMonth}
        </Text>
        <Text>
          <strong>Grad Year:</strong> {education.gradYear}
        </Text>
      </Card>
    )
  })

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
          value={education.gradMonth}
          placeholder="June"
          label="Graduation Month"
          required
          onChange={(event) => setEducation({ ...education, gradMonth: event.currentTarget.value })}
        />
        <TextInput
          value={education.gradYear}
          placeholder="2017"
          label="Graduation Year"
          required
          onChange={(event) => setEducation({ ...education, gradYear: event.currentTarget.value })}
        />
      </form>
      <SimpleGrid
        className="education-card-container"
        cols={3}
        spacing="sm"
        breakpoints={[
          { maxWidth: 1100, cols: 2, spacing: 'sm' },
          { maxWidth: 850, cols: 1, spacing: 'sm' },
        ]}>
        {educationElements}
      </SimpleGrid>
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
    </div>
  )
}

export default EducationInformation

import { Button, Center, List, TextInput } from '@mantine/core'
import React from 'react'

export default function Qualifications(props) {
  const { qualificationsInfo, setQualificationsInfo, setShowPages } = props
  const [qualification, setQualification] = React.useState('')

  function addQualification() {
    setQualificationsInfo((prevQualifications) => [...prevQualifications, qualification])
    setQualification('')
  }

  function deleteQualification() {
    setQualificationsInfo((prevQualifications) => [...prevQualifications.slice(0, -1)])
  }

  function backToEducation() {
    setShowPages((prev) => ({
      ...prev,
      showQualificationsInfo: !prev.showQualificationsInfo,
      showEducationInfo: !prev.showEducationInfo,
    }))
  }

  function continueToSkills() {
    setShowPages((prev) => ({
      ...prev,
      showQualificationsInfo: !prev.showQualificationsInfo,
      showSkillsInfo: !prev.showSkillsInfo,
    }))
  }

  const qualElements = qualificationsInfo.map((qualification) => <List.Item>{qualification}</List.Item>)

  return (
    <div>
      <h1>Summary of Qualifications</h1>
      <h3>
        This section will usually be one of the first things a hiring manager reads. It tells them, "Here's who I am,
        and here's what I can do for your company."
      </h3>
      <List className="qualifications-list">{qualElements}</List>
      <Center>
        <TextInput
          placeholder="Add Qualification"
          label="Qualification"
          required
          value={qualification}
          onChange={(e) => setQualification(e.currentTarget.value)}
        />
      </Center>
      <div className="qualifications-button-container">
        <Button size="md" onClick={addQualification}>
          Add Qualification
        </Button>
        <Button size="md" onClick={deleteQualification}>
          Delete Qualification
        </Button>
      </div>
      <div className="qualifications-button-container">
        <Button size="md" onClick={backToEducation}>
          Go Back to Education
        </Button>
        <Button size="md" onClick={continueToSkills}>
          Continue to Skills
        </Button>
      </div>
    </div>
  )
}
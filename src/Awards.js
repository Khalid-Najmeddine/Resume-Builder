import { Button, Center, List, TextInput } from '@mantine/core'
import React from 'react'

export default function Awards(props) {
  const { awards, setAwards, setShowPages } = props
  const [award, setAward] = React.useState('')

  function addAward() {
    setAwards((prevAwards) => [...prevAwards, award])
    setAward('')
  }

  function deleteAward() {
    setAwards((prevAwards) => [...prevAwards.slice(0, -1)])
  }

  function backToWorkExperience() {
    setShowPages((prev) => ({
      ...prev,
      showAwardsInfo: !prev.showAwardsInfo,
      showWorkExpInfo: !prev.showWorkExpInfo,
    }))
  }

  function continueToResumePreview() {
    setShowPages((prev) => ({
      ...prev,
      showAwardsInfo: !prev.showAwardsInfo,
      showResumePreview: !prev.showResumePreview,
    }))
  }

  const awardElements = awards.map((skill) => <List.Item>{skill}</List.Item>)

  return (
    <div>
      <h1>Awards</h1>
      <List className="awards-list">{awardElements}</List>
      <Center>
        <TextInput
          placeholder="Add Award"
          label="Award"
          required
          value={award}
          onChange={(e) => setAward(e.currentTarget.value)}
        />
      </Center>
      <div className="awards-button-container">
        <Button size="md" onClick={addAward}>
          Add Award
        </Button>
        <Button size="md" onClick={deleteAward}>
          Delete Award
        </Button>
      </div>
      <div className="awards-button-container">
        <Button size="md" onClick={backToWorkExperience}>
          Go Back to Work Experience
        </Button>
        <Button size="md" onClick={continueToResumePreview}>
          Continue to Resume Preview
        </Button>
      </div>
    </div>
  )
}
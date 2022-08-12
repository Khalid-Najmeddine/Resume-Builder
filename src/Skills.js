import { Button, Center, List, TextInput } from '@mantine/core'
import React from 'react'

function Skills(props) {
  const { skills, setSkills, setShowPages } = props
  const [skill, setSkill] = React.useState('')

  function addSkill() {
    setSkills((prevSkills) => [...prevSkills, skill])
    setSkill('')
  }

  function deleteSkill() {
    setSkills((prevSkills) => [...prevSkills.slice(0, -1)])
  }

  function backToEducation() {
    setShowPages((prev) => ({
      ...prev,
      showSkillsInfo: !prev.showSkillsInfo,
      showEducationInfo: !prev.showEducationInfo,
    }))
  }

  function continueToWorkExperience() {
    setShowPages((prev) => ({
      ...prev,
      showSkillsInfo: !prev.showSkillsInfo,
      showWorkExpInfo: !prev.showWorkExpInfo,
    }))
  }

  const skillElements = skills.map((skill) => <List.Item>{skill}</List.Item>)

  return (
    <div>
      <h1>Technical and Soft Skills</h1>
      <h3>You must have 5 or more skills in order to continue to the next page</h3>
      <List className="skills-list">{skillElements}</List>
      <Center>
        <TextInput
          placeholder="Add Skill"
          label="Skill"
          required
          value={skill}
          onChange={(event) => setSkill(event.currentTarget.value)}
        />
      </Center>
      <div className="skills-button-container">
        <Button size="md" onClick={addSkill}>
          Add Skill
        </Button>
        <Button size="md" onClick={deleteSkill}>
          Delete Skill
        </Button>
      </div>
      <div className="skills-button-container">
        <Button size="md" onClick={backToEducation}>
          Go Back to Education
        </Button>
        <Button size="md" onClick={continueToWorkExperience}>
          Continue to Work Experience
        </Button>
      </div>
    </div>
  )
}

export default Skills

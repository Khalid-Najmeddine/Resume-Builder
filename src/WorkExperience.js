//Work Experience !!
import React from 'react'
import { Button, TextInput } from '@mantine/core'

function WorkExperienceInformation(props) {
  const { setShowPages, workExperienceInfo, setWorkExperienceInfo, setWorkExpInfo, setAwards } = props

  function addWorkExperience() {
    setWorkExpInfo((prevWorkExperience) => [...prevWorkExperience, workExperienceInfo])
    setWorkExperienceInfo('')
  }

  function deleteWorkExperience() {
    setWorkExpInfo((prevWorkExperience) => [...prevWorkExperience.slice(0, -1)])
  }

  function backToSkills() {
    setShowPages((prev) => ({
      ...prev,
      showWorkExpInfo: !prev.showWorkExpInfo,
      showSkillsInfo: !prev.showSkillsInfo,
    }))
  }

  function continueToAwards() {
    setShowPages((prev) => ({
      ...prev,
      showWorkExpInfo: !prev.showWorkExpInfo,
      showAwardsInfo: !prev.showAwardsInfo,
    }))
  }

  return (
    <div>
      <h1> Work Experience </h1>
      <form>
        <TextInput
          value={workExperienceInfo.jobTitle}
          placeholder="University of Calgary"
          label="College/University"
          required
          onChange={(event) => setWorkExperienceInfo({ ...workExperienceInfo, jobTitle: event.currentTarget.value })}
        />
        <TextInput
          value={workExperienceInfo.companyOrOrganization}
          placeholder="Software Engineering"
          label="Field of Study"
          required
          onChange={(event) =>
            setWorkExperienceInfo({ ...workExperienceInfo, companyOrOrganization: event.currentTarget.value })
          }
        />
        <TextInput
          value={workExperienceInfo.city}
          placeholder="Bachelor's Degree"
          label="Degree/Program"
          required
          onChange={(event) => setWorkExperienceInfo({ ...workExperienceInfo, city: event.currentTarget.value })}
        />
        <TextInput
          value={workExperienceInfo.stateOrProvince}
          placeholder="Calgary"
          label="City"
          required
          onChange={(event) =>
            setWorkExperienceInfo({ ...workExperienceInfo, stateOrProvince: event.currentTarget.value })
          }
        />
        <TextInput
          value={workExperienceInfo.country}
          placeholder="Alberta"
          label="State or Province"
          required
          onChange={(event) => setWorkExperienceInfo({ ...workExperienceInfo, country: event.currentTarget.value })}
        />
        <TextInput
          value={workExperienceInfo.startMonth}
          placeholder="Canada"
          label="startMonth"
          required
          onChange={(event) => setWorkExperienceInfo({ ...workExperienceInfo, startMonth: event.currentTarget.value })}
        />
        <TextInput
          value={workExperienceInfo.startYear}
          placeholder="June"
          label="Graduation Month"
          required
          onChange={(event) => setWorkExperienceInfo({ ...workExperienceInfo, startYear: event.currentTarget.value })}
        />
        <TextInput
          value={workExperienceInfo.endMonth}
          placeholder="2017"
          label="Graduation Year"
          required
          onChange={(event) => setWorkExperienceInfo({ ...workExperienceInfo, endMonth: event.currentTarget.value })}
        />
        <TextInput
          value={workExperienceInfo.endYear}
          placeholder="2017"
          label="Graduation Year"
          required
          onChange={(event) => setWorkExperienceInfo({ ...workExperienceInfo, endYear: event.currentTarget.value })}
        />
        <div className="workExperience-button-container">
          <Button size="md" onClick={addWorkExperience}>
            Add Work Experience
          </Button>
          <Button size="md" onClick={deleteWorkExperience}>
            Delete Work Experience
          </Button>
        </div>
        <div className="workExperienceSection-button-container">
          <Button size="md" onClick={backToSkills}>
            Go Back to Skills Section
          </Button>
          <Button size="md" onClick={continueToAwards}>
            Continue to Awards Section
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WorkExperienceInformation

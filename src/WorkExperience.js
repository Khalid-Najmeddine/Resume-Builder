import React from 'react'
import { Button, TextInput, Card, Text, List, SimpleGrid } from '@mantine/core'

export default function WorkExperienceInformation(props) {
  const { setShowPages, workExperienceInfo, setWorkExperienceInfo } = props
  const [workExperience, setWorkExperience] = React.useState({
    jobTitle: '',
    companyOrOrganization: '',
    city: '',
    stateOrProvince: '',
    country: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: '',
  })

  function addWorkExperience() {
    setWorkExperienceInfo((prevWorkExperience) => [...prevWorkExperience, workExperience])
    setWorkExperience({
      jobTitle: '',
      companyOrOrganization: '',
      city: '',
      stateOrProvince: '',
      country: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
    })
  }

  function deleteWorkExperience() {
    setWorkExperienceInfo((prevWorkExperience) => [...prevWorkExperience.slice(0, -1)])
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

  const workExperienceElements = workExperienceInfo.map((workExperience) => {
    return (
      <Card shadow="sm" p="lg" radius="md" withBorder key={workExperience.jobTitle}>
        <Text>
          <strong>Job Title:</strong> {workExperience.jobTitle}
        </Text>
        <Text>
          <strong>Company/Organization:</strong> {workExperience.companyOrOrganization}
        </Text>
        <Text>
          <strong>City:</strong> {workExperience.city}
        </Text>
        <Text>
          <strong>State/Province:</strong> {workExperience.stateOrProvince}
        </Text>
        <Text>
          <strong>Country:</strong> {workExperience.country}
        </Text>
        <Text>
          <strong>Start Month:</strong> {workExperience.startMonth}
        </Text>
        <Text>
          <strong>Start Year:</strong> {workExperience.startYear}
        </Text>
        <Text>
          <strong>End Month:</strong> {workExperience.endMonth}
        </Text>
        <Text>
          <strong>End Year:</strong> {workExperience.endYear}
        </Text>
      </Card>
    )
  })

  const workExperienceDescription = workExperienceInfo.map((workExperience) => <List.Item>{workExperience}</List.Item>)

  return (
    <div>
      <h1> Work Experience </h1>
      <form>
        <TextInput
          value={workExperience.jobTitle}
          placeholder="Front-End Developer"
          label="Job Title"
          required
          onChange={(event) => setWorkExperience({ ...workExperience, jobTitle: event.currentTarget.value })}
        />
        <TextInput
          value={workExperience.companyOrOrganization}
          placeholder="Global Talent Accelerator"
          label="Company/Organization"
          required
          onChange={(event) =>
            setWorkExperience({ ...workExperience, companyOrOrganization: event.currentTarget.value })
          }
        />
        <TextInput
          value={workExperience.city}
          placeholder="Calgary"
          label="City"
          required
          onChange={(event) => setWorkExperience({ ...workExperience, city: event.currentTarget.value })}
        />
        <TextInput
          value={workExperience.stateOrProvince}
          placeholder="Alberta"
          label="State or Province"
          required
          onChange={(event) => setWorkExperience({ ...workExperience, stateOrProvince: event.currentTarget.value })}
        />
        <TextInput
          value={workExperience.country}
          placeholder="Canada"
          label="Country"
          required
          onChange={(event) => setWorkExperience({ ...workExperience, country: event.currentTarget.value })}
        />
        <TextInput
          value={workExperience.startMonth}
          placeholder="June"
          label="Start Month"
          required
          onChange={(event) => setWorkExperience({ ...workExperience, startMonth: event.currentTarget.value })}
        />
        <TextInput
          value={workExperience.startYear}
          placeholder="2018"
          label="Start Year"
          required
          onChange={(event) => setWorkExperience({ ...workExperience, startYear: event.currentTarget.value })}
        />
        <TextInput
          value={workExperience.endMonth}
          placeholder="June"
          label="End Month"
          required
          onChange={(event) => setWorkExperience({ ...workExperience, endMonth: event.currentTarget.value })}
        />
        <TextInput
          value={workExperience.endYear}
          placeholder="2023"
          label="End Year"
          required
          onChange={(event) => setWorkExperience({ ...workExperience, endYear: event.currentTarget.value })}
        />
        <List className="work-Experience-list">{workExperienceDescription}</List>
      </form>
      <SimpleGrid
        className="work-experience-card-container"
        cols={3}
        spacing="sm"
        breakpoints={[
          { maxWidth: 1100, cols: 2, spacing: 'sm' },
          { maxWidth: 850, cols: 1, spacing: 'sm' },
        ]}>
        {workExperienceElements}
      </SimpleGrid>
      <div className="work-experience-button-container">
        <Button size="md" onClick={addWorkExperience}>
          Add Work Experience
        </Button>
        <Button size="md" onClick={deleteWorkExperience}>
          Delete Work Experience
        </Button>
      </div>
      <div className="work-experienceSection-button-container">
        <Button size="md" onClick={backToSkills}>
          Go Back to Skills Section
        </Button>
        <Button size="md" onClick={continueToAwards}>
          Continue to Awards Section
        </Button>
      </div>
    </div>
  )
}

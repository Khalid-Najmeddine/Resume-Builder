import React from 'react'
import { Button } from '@mantine/core'

export default function ResumePreview(props) {
  const { setShowPages, contactInfo, educationInfo, qualificationsInfo, skillsInfo, workExperienceInfo, awardsInfo } = props

  function backToAwards() {
    setShowPages((prev) => ({
      ...prev,
      showResumePreview: !prev.showResumePreview,
      showAwardsInfo: !prev.showAwardsInfo,
    }))
  }

  function exportDocumentToPDF() {
    setShowPages((prev) => ({
      ...prev,
      showResumePreview: !prev.showResumePreview,
      showExportToPDF: !prev.showExportToPDF,
    }))
  }

  return (
    <div className="resume-preview">
      <div className="contactinfo-preview">
        <h1>
          {contactInfo.firstName} {contactInfo.lastName}
        </h1>
        <p>
          <strong> {contactInfo.phoneNumber}</strong> | {contactInfo.email} |{' '}
          <strong>
            {contactInfo.city}, {contactInfo.stateOrProvince}, {contactInfo.country}, {contactInfo.postalCode} {''}
          </strong>
          | {contactInfo.linkedInURL}
        </p>
      </div>
      <div className="education-preview">
        <h2>Education</h2>
        {educationInfo.map((education) => {
          return (
            <div>
              <p>
                <div className="education-preview-program-container">
                  <strong>
                    {education.degreeOrProgram}, {education.fieldOfStudy}
                  </strong>
                  <strong>
                    {education.gradMonth}, {education.gradYear}
                  </strong>
                </div>
                {education.collegeOrUniversity} | {education.city}, {education.stateOrProvince}, {education.country}
              </p>
            </div>
          )
        })}
      </div>
      <div className="qualifications-preview">
        <h2> Summary of Qualifications</h2>
        {qualificationsInfo.map((qualification) => {
          return (
            <div>
              <p>{qualification}</p>
            </div>
          )
        })}

      </div>
      <div className="skills-preview">
        <h2>Skills</h2>
        {skillsInfo.map((skill) => {
          return (
            <div>
              <p>{skill}</p>
            </div>
          )
        })}
      </div>
      <div className="work-preview">
        <h2>Work Experience</h2>
        {workExperienceInfo.map((workExperience) => {
          return (
            <div>
              <p>
                <div className="work-preview-container">
                  <strong>
                    {workExperience.jobTitle}
                  </strong>
                  <strong>
                    {workExperience.startMonth} {workExperience.startYear} - {workExperience.endMonth} {workExperience.endYear}
                  </strong>
                </div>
                <div>
                  {workExperience.companyOrOrganization} | {workExperience.city}, {workExperience.stateOrProvince}, {workExperience.country}
                </div>
              </p>
            </div>
          )
        })}

      </div>
      <div className="awards-preview">
        <h2>Awards</h2>
        {awardsInfo.map((award) => {
          return (
            <div>
              <p>{award}</p>
            </div>
          )
        })}
      </div>
      <div className="resume-preview-button-container">
        <Button size="md" onClick={backToAwards}>
          Go Back to Awards Section
        </Button>
        <Button size="md" onClick={exportDocumentToPDF}>
          Export Document to PDF File
        </Button>
      </div>
    </div>
  )
}
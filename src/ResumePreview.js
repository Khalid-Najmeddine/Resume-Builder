// Resume Preview (include an export to PDF feature after the alpha stage)
function ResumePreview(props) {
  const { contactInfo, educationInfo, qualificationsInfo, skillsInfo, workExperienceInfo, awardsInfo } = props

  return (
    <div className="resume-preview">
      <div className="contactinfo-preview">
        <h1>
          {contactInfo.firstName} {contactInfo.lastName}
        </h1>
        <p>
          <strong>{contactInfo.phoneNumber}</strong> | {contactInfo.email} |{' '}
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
        {qualificationsInfo.map((qualification) => {
          return (
            <div>
              <p>{qualification}</p>
            </div>
          )
        })}
      </div>
      <div className="skills-preview">
        {skillsInfo.map((skill) => {
          return (
            <div>
              <p>{skill}</p>
            </div>
          )
        })}
      </div>
      <div className="work-preview">
        {workExperienceInfo.map((workExperience) => {
          return (
            <div>
              <p>{workExperience.jobTitle}</p>
              <p>{workExperience.companyOrOrganization}</p>
              <p>{workExperience.city}</p>
              <p>{workExperience.stateOrProvince}</p>
              <p>{workExperience.country}</p>
              <p>{workExperience.startMonth}</p>
              <p>{workExperience.startYear}</p>
              <p>{workExperience.endMonth}</p>
              <p>{workExperience.endYear}</p>
            </div>
          )
        })}
      </div>
      <div className="awards-preview">
        {awardsInfo.map((award) => {
          return (
            <div>
              <p>{award}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ResumePreview

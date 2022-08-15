// Resume Preview (include an export to PDF feature after the alpha stage)
function ResumePreview(props) {
  const { contactInfo, educationInfo, qualificationsInfo, skillsInfo, workExperienceInfo, awardsInfo } = props

  return (
    <div>
      <div className="contactinfo-preview">
        <p>{contactInfo.firstName}</p>
        <p>{contactInfo.lastName}</p>
        <p>{contactInfo.email}</p>
        <p>{contactInfo.phoneNumber}</p>
        <p>{contactInfo.city}</p>
        <p>{contactInfo.stateOrProvince}</p>
        <p>{contactInfo.country}</p>
        <p>{contactInfo.postalCode}</p>
        <p>{contactInfo.linkedInURL}</p>
      </div>
      <div className="education-preview">
        {educationInfo.map((education) => {
          return (
            <div>
              <p>{education.collegeOrUniversity}</p>
              <p>{education.fieldOfStudy}</p>
              <p>{education.degreeOrProgram}</p>
              <p>{education.city}</p>
              <p>{education.stateOrProvince}</p>
              <p>{education.country}</p>
              <p>{education.gradMonth}</p>
              <p>{education.gradYear}</p>
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

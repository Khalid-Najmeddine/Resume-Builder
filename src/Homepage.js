import React from 'react'
import { Button } from '@mantine/core'

export default function Homepage(props) {
  const { setShowPages } = props

  function homePageButton() {
    setShowPages((prev) => ({ ...prev, showHomepage: !prev.showHomepage, showContactInfo: !prev.showContactInfo }))
  }

  return (
    <main className="homepage">
      <h1 className="homepage-Title">The Ultimate Resume Builder</h1>
      <p className="homepage-Description">
        Build beautiful, recruiter-tested resumes in a few clicks! The Ultimate resume builder is powerful and easy to
        use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your
        interview chances and rise above the competition.Our online resume builder generates resume templates with
        thousands of perfectly written work experience bullet points for you to choose from, covering all industries.
        Just point and click to instantly place the work duties you performed onto your resume in bullet point format.
        Avoid hours of online research and wasted time playing with margins in Microsoft Word and let our resume builder
        make a resume for you. We guide you through creating each resume section step-by-step — you just need to fill in
        the blanks. With our online resume builder, you can create a resume that showcases your greatest strengths and
        unique professional and educational experiences.
      </p>
      <Button onClick={homePageButton}>Give it a try</Button>
    </main>
  )
}
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}

import React from "react"
import { Grid } from '@mantine/core';

function resumePreview({handleClick}) {

  const [resumePreviewInfo, setResumePreviewInfo] = React.useState(
    {
        firstName: "", 
        lastName: "", 
        phoneNumber: "",
        city: "",
        stateOrProvince: "",
        country: "",
        postalCode: "",
        email: "", 
        linkedInURL: "",
        
    }
)
return (
  <form>
      <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
      />
      <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
      />
      <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
      />
      <textarea 
          value={formData.comments}
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
      />
      <input 
          type="checkbox" 
          id="isFriendly" 
          checked={formData.isFriendly}
          onChange={handleChange}
          name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />
      
      <fieldset>
          <legend>Current employment status</legend>
          <input 
              type="radio"
              id="unemployed"
              name="employment"
              value="unemployed"
              checked={formData.employment === "unemployed"}
              onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />
          
          <input 
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              checked={formData.employment === "part-time"}
              onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />
          
          <input 
              type="radio"
              id="full-time"
              name="employment"
              value="full-time"
              checked={formData.employment === "full-time"}
              onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
      </fieldset>
      <br />
      
  </form>
)
}
      
        <main className="homepage">
            <h1 className="homepage-Title">The Ultimate Resume Builder</h1>
            <p className="homepage-Description">Build beautiful, recruiter-tested resumes in a few clicks! The Ultimate resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.Our online resume builder generates resume templates with thousands of perfectly written work experience bullet points for you to choose from, covering all industries. Just point and click to instantly place the work duties you performed onto your resume in bullet point format. Avoid hours of online research and wasted time playing with margins in Microsoft Word and let our resume builder make a resume for you. We guide you through creating each resume section step-by-step — you just need to fill in the blanks. With our online resume builder, you can create a resume that showcases your greatest strengths and unique professional and educational experiences.</p>
            <button className="homepage-Button" onClick={handleClick}>Try for Free</button>
        </main>
    )
}

function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}

export default ContactInformation
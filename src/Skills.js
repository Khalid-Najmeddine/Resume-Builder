import { Grid } from '@mantine/core';

import React from "react"

function skills({handleClick}) {

  const [skillsInfo, setSkillsInfo] = React.useState(
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


function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}
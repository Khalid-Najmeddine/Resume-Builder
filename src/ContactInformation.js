import React from 'react'
import {Button, TextInput} from '@mantine/core'

function ContactInformation(props) {
  const {setShowPages, contactInfo, setContactInfo} = props
  
    function backToHomepage() {
      setShowPages((prev) => ({...prev, showContactInfo: !prev.showContactInfo, showHomepage: !prev.showHomepage}))
    }

    function continueToEducation() {
      setShowPages((prev) => ({...prev, showContactInfo: !prev.showContactInfo, showEducationInfo: !prev.showEducationInfo}))
    }
    
  return (
    <div>
      <h1> Professional Contact Information</h1>
      <form>
        <TextInput 
          className="first-Name"
          value={contactInfo.firstName}
          placeholder="Joe"
          label="First Name"
          required
          onChange={(event) => setContactInfo({...contactInfo, firstName:event.currentTarget.value})}
          />
        <TextInput 
          className="last-Name"
          value={contactInfo.lastName}
          placeholder="Schmoe" 
          label="Last Name"
          required
          onChange={(event) => setContactInfo({...contactInfo, lastName:event.currentTarget.value})}
          />
      <TextInput 
        className="phone-Number"
        value={contactInfo.phoneNumber}
        placeholder="123-456-7890" 
        label="Phone Number"
        required
        onChange={(event) => setContactInfo({...contactInfo, phoneNumber:event.currentTarget.value})}
      />
      <TextInput 
        className="city"
        value={contactInfo.city}
        placeholder="Calgary" 
        label="City"
        required
        onChange={(event) => setContactInfo({...contactInfo, city:event.currentTarget.value})}
      />
      <TextInput 
        className="state-or-province"
        value={contactInfo.stateOrProvince}
        placeholder="Alberta" 
        label="State or Province"
        required
        onChange={(event) => setContactInfo({...contactInfo, stateOrProvince:event.currentTarget.value})}
      />
      <TextInput 
        className="country"
        value={contactInfo.country}
        placeholder="Canada" 
        label="Country"
        required
        onChange={(event) => setContactInfo({...contactInfo, country:event.currentTarget.value})}
      />
      <TextInput 
        className="postal-code"
        value={contactInfo.postalCode}
        placeholder="T2W0A3" 
        label="Postal Code"
        required
        onChange={(event) => setContactInfo({...contactInfo, postalCode:event.currentTarget.value})}
      />
      <TextInput 
        className="email"
        value={contactInfo.email}
        placeholder="JoeSchmoe@gmail.com" 
        label="Email"
        required
        onChange={(event) => setContactInfo({...contactInfo, email:event.currentTarget.value})}
      />
      <TextInput 
        className="linkedIn-URL "
        value={contactInfo.linkedInURL}
        placeholder="www.linkedin.com/in/Joe-Schmoe" 
        label="LinkedIn URL"
        required
        onChange={(event) => setContactInfo({...contactInfo, linkedInURL:event.currentTarget.value})}
      />
      <div className="contactInformation-button-container">
        <Button size="md" onClick={backToHomepage}> Go Back to Ultimate Resume Builder Section </Button>
        <Button size="md" onClick={continueToEducation}> Continue to Education Section </Button>
      </div>
     </form>
    </div>
    
  )
}

export default ContactInformation

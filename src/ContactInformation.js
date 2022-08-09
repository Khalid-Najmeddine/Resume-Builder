//Contact Information
import React from 'react'
import {TextInput} from '@mantine/core'

function ContactInformation(props) {
  const {contactInfo, setContactInfo} = props

  //   const [contactInfo, setContactInfo] = React.useState({
  //     firstName: '',
  //     lastName: '',
  //     phoneNumber: '',
  //     city: '',
  //     stateOrProvince: '',
  //     country: '',
  //     postalCode: '',
  //     email: '',
  //     linkedInURL: '',
  //   })

  return (
    <div>
      <h1> Professional Contact Information</h1>
     <form>
      <TextInput
        value={contactInfo.firstName}
        placeholder="Joe"
        label="First Name"
        required
        onChange={(event) => setContactInfo({...contactInfo, firstName:event.currentTarget.value})}
      />
          
      <TextInput 
        value={contactInfo.lastName}
        placeholder="Schmoe" 
        label="Last Name"
        required
        onChange={(event) => setContactInfo({...contactInfo, lastName:event.currentTarget.value})}
      />
        
      <TextInput 
        value={contactInfo.phoneNumber}
        placeholder="123-456-7890" 
        label="Phone Number"
        required
        onChange={(event) => setContactInfo({...contactInfo, phoneNumber:event.currentTarget.value})}
      />

      <TextInput 
        value={contactInfo.city}
        placeholder="Calgary" 
        label="City"
        required
        onChange={(event) => setContactInfo({...contactInfo, city:event.currentTarget.value})}
      />

      <TextInput 
        value={contactInfo.stateOrProvince}
        placeholder="Alberta" 
        label="State or Province"
        required
        onChange={(event) => setContactInfo({...contactInfo, stateOrProvince:event.currentTarget.value})}
      />

      <TextInput 
        value={contactInfo.country}
        placeholder="Canada" 
        label="Country"
        required
        onChange={(event) => setContactInfo({...contactInfo, country:event.currentTarget.value})}
      />

      <TextInput 
        value={contactInfo.postalCode}
        placeholder="T2W0A3" 
        label="Postal Code"
        required
        onChange={(event) => setContactInfo({...contactInfo, postalCode:event.currentTarget.value})}
      />

      <TextInput 
        value={contactInfo.email}
        placeholder="JoeSchmoe@gmail.com" 
        label="Email"
        required
        onChange={(event) => setContactInfo({...contactInfo, email:event.currentTarget.value})}
      />
      
      <TextInput 
        value={contactInfo.linkedInURL}
        placeholder="www.linkedin.com/in/Joe-Schmoe" 
        label="LinkedIn URL"
        required
        onChange={(event) => setContactInfo({...contactInfo, linkedInURL:event.currentTarget.value})}
      />

     </form>
      
    </div>
  )
}

export default ContactInformation



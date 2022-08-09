import React from 'react'
import { TextInput } from '@mantine/core'

function ContactInformation(props) {
  const { contactInfo, setContactInfo } = props

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
        placeholder="Khalid "
        label="First Name"
        required
        onChange={(event) => setContactInfo({...contactInfo, firstName:event.currentTarget.value})}
      />
          
      <TextInput 
        placeholder="Najmeddine " 
        label="Last Name"
        required
        onChange={(event) => setContactInfo({...contactInfo, lastName:event.currentTarget.value})}

     />
     </form>
      
    </div>
  )
}


export default ContactInformation

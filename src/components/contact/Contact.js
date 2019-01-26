import React from 'react'
import { Form, Input, Button, } from 'reactstrap'

function Contact(props) {
  return (<Form className="contactForm">
    <Input className='contactInput' type='email' tabindex='1' placeholder='Email' />
    <Input className='contactInput' type='text' tabindex='2' placeholder='Subject' />
    <Input className='contactInput' type='textarea' tabindex='3' placeholder='Message' />
    <Button tabindex='4'>Submit</Button>
  </Form>)
}

export default Contact
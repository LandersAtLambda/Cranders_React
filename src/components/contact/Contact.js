import React from 'react'

function Contact(props) {
  return (<form>
    <input type='email' placeholder='Email' />
    <input type='text' placeholder='Subject' />
    <input type='text' placeholder='Message' />
    <button>Submit</button>
  </form>)
}

export default Contact
import React, { useState } from 'react'

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
  })

  const { name, email, phone, type } = contact

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value })
  return (
    <form>
      <input type='text' placeholder='name' vlaue={name} onChange={onChange} />
      <input
        type='text'
        placeholder='email'
        vlaue={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='phone'
        vlaue={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value='Add Contact'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  )
}

export default ContactForm

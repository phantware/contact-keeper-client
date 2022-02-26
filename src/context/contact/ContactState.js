import React, { useReducer, useContext } from 'react'
import axios from 'axios'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from '../types'

const ContactState = ({ children }) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Ismail Jamiu',
        email: 'phantmoney2011@gmail.com',
        phone: '111-111-111',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Kenny Olawale',
        email: 'kennyb@gmail.com',
        phone: '222-222-222',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Jackson Omogege',
        email: 'omoge@gmail.com',
        phone: '333-333-333',
        type: 'personal',
      },
    ],
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {children}
    </ContactContext.Provider>
  )
}

export default ContactState

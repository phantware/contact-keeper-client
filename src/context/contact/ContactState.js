import React, { useReducer, useContext } from 'react'
import * as uuid from 'uuid'
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
    current: null,
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)
  //Add Contact

  const addContact = (contact) => {
    contact.id = uuid.v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  //Set Current Contact

  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  //Set Clear Contact

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}

export default ContactState

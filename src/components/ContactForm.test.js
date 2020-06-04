import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'
import { act } from 'react-dom/test-utils'

test('ContactForm adds new contact info', async () => {
    await act(async () => {
    render(<ContactForm />)
    
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)

    fireEvent.change(firstNameInput, { target: { value: 'Karen' }})        
    fireEvent.change(lastNameInput, { target: { value: 'Lei' }})        
    fireEvent.change(emailInput, { target: { value: 'karen@karen.com' }})        
    fireEvent.change(messageInput, { target: { value: 'hello' }})        

    const submitButton = screen.getByTestId(/submit/i)
    fireEvent.click(submitButton)

    expect(firstNameInput.value).toBe('Karen')
    expect(lastNameInput.value).toBe('Lei')
    expect(emailInput.value).toBe('karen@karen.com')
    expect(messageInput.value).toBe('hello')

    // const newContact = screen.getByText(/karen/i);

})
})

import React, { useState, useEffect } from 'react'
import * as yup from "yup"
import styled from 'styled-components'
import formSchema from '../formSchema'
import Axios from 'axios'
import '../index.css'


const Form = props => {
    
    const { addNewUser } = props

    const [post, setPost] = useState([])

    const initialFormState = {
        name: '',
        email: '',
        password: '',
        terms: ''
    }

    // server err
    const [serverError, setServerError] = useState('')

    // manage state for form inputs
    const [formState, setFormState] = useState(initialFormState)

    // control whether the form can be submitted
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    //managing state for errors
    const [errors, setErrors] = useState(initialFormState)

    //inline validation, validating one key/value pair

    const validateChange = (e) => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            //if valid then clear errors
            .then(valid => {
                setErrors({...errors, [e.target.name]: 
                ""})
            })
            .catch(err => {
                // if fails validation, set error to this.state
                console.log("There is an error", err)
                setErrors({ ...errors, [e.target.name]: err.errors[0]})
            })
    }

    //Whenever state updates, validate form, if valid change button
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid);
            setIsButtonDisabled(!valid)
        })
    },[formState])

    //On submit
    const formSubmit = (event) => {
        event.preventDefault()
        
        Axios
            .post("https://reqres.in/api/users",formState)
            .then(response => {
                //update temporary state with value to display
                setPost(response.data)

            setFormState({
                name: '',
                email: '',
                password: '',
                terms: '',
            })

            setServerError(null)

            addNewUser(response.data)
            })
            .catch(err => {
                setServerError("There is a server error!")
            })
    }

    const inputChange = e => {
        e.persist()
        const newFormData = {
            ...formState,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        }
        validateChange(e);
        setFormState(newFormData);
    }


    return (
        <FormDiv onSubmit={formSubmit}>
            {serverError ? <p>{serverError}</p> : null}
            <Label htmlFor='name' >Name</Label>
            <Input 
                id='name'
                type='text' 
                name='name'
                onChange={inputChange} 
                value={formState.name} 
            />

            {/* Name Error Message */}
            {errors.name.length > 0 ? (<ErrorWarning className="error">{errors.name}</ErrorWarning>) : null}

            <Label htmlFor='email' >Email</Label>
            <Input 
                type='text' 
                name='email' 
                onChange={inputChange} 
                value={formState.email} />
            {/* Email Error Message */}
            {errors.email.length > 0 ? (<ErrorWarning className="error">{errors.email}</ErrorWarning>) : null}

            <Label htmlFor='password' >Password</Label>
            <Input 
                type='password' 
                name='password' 
                onChange={inputChange} 
                value={formState.password} />
            {/* Password Error Message */}
            {errors.password.length > 0 ? (<ErrorWarning className="error">{errors.password}</ErrorWarning>) : null}

            <Label htmlFor='terms' >Terms of Service</Label>
            <Checkbox className='checky'
                type='checkbox' 
                name='terms'
                checked={formState.terms} 
                onChange={inputChange} />
            
            

            <Button disabled={isButtonDisabled} type="submit">Submit</Button>

        </FormDiv>)
}

// Styled Componenets

const FormDiv = styled.form`
    background: #fff;
    border-radius: .5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
    gap: 1rem;
    padding: 2rem;
    width: 400px;
`

const FormTitle = styled.h2`
    font-size: 1.8rem;
    padding: 1rem 0;
`

const Input = styled.input`
    font-size: 1.4rem;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 100%;
    padding: .5rem;
    `

const Checkbox = styled.input`
    transform: scale(1.4);
    margin: .25rem;
`

const Label = styled.label`
    text-transform: uppercase;
`
const ErrorWarning = styled.p`
    color: red;
`

const Button = styled.button`
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    border: none;
    border-radius: 6px;
    color: #fff;
    font-weight: 700;
    background: #3D5F9A;
    &:hover{
        background-color: ;
    }
    &:disabled {
        background-color: white;
        border: 1px solid #ccc;
        color: #ccc;
    }
`

export default Form
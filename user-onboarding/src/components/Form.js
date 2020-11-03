import React from 'react'
import styled from 'styled-components'


const Form = props => {

    return (
        <FormDiv>
            <Label htmlFor='name'>Name</Label>
            <Input type='text' name='name'/>

            <Label htmlFor='email'>Email</Label>
            <Input type='email' />

            <Label htmlFor='password'>Password</Label>
            <Input type='password' name='password' />

            <Label htmlFor='tos'>Terms of Service</Label>
            <Input type='checkbox' name='tos' />

            <Button>Submit</Button>
            
        </FormDiv>
    )
}

// Styled Componenets


const FormDiv = styled.form`
    background: #fff;
    padding: 2rem;
    margin: 2rem;
    border-radius: .5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
`

const FormTitle = styled.h2`
    font-size: 1.8rem;
    padding: 1rem 0;
`

const Input = styled.input`
    font-size: 1.4rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: .5rem 0;
    width: 100%;
`

const Label = styled.label`
    text-transform: uppercase;
`

const Button = styled.button`
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 6px;
    color: #fff;
    font-weight: 700;
    background: #882AE1;
    &:hover{
        background-color: #6712E0;
    }
`

export default Form
import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import styled from 'styled-components'


function App() {

  //set users
  const [users, setUsers] = useState([])

  const addNewUser = (user) => {
    const newUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      terms: user.terms
    }
    setUsers([newUser, ...users])
    console.log(user)
  }
  

  return (
    <Container>
    <Headline>User Onboarding</Headline>
    <Form addNewUser={addNewUser} />
    <Users>
    {users.map((user) => (
      <UserCard key={user.id}>
        <UserTitle>{user.name}</UserTitle>
        <UserDetail>{user.email}</UserDetail>
      </UserCard>
    ))}
    </Users>



    </Container>
  );
}

const Container = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: center;
    text-align: center;
    background: #8e2de2; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #4a00e0,
      #8e2de2
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #4a00e0,
      #8e2de2
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    min-height: 100vh;
    margin: 0;
`

const Headline = styled.h1`
    font-size: 3.5rem;
    padding-top: 2rem;
    color: #fff;
`

const Users = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`

const UserCard = styled.div`
    min-width: 300px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background: #fff;
    padding: 1rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
`

const UserTitle = styled.h2`
    font-size: 2.4rem;
`

const UserDetail = styled.h3`
    font-size: 1.4rem;
    font-weight: 400;
`

export default App;

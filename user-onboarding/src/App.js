import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import styled from 'styled-components'
import UserCard from './components/UserCard'


function App() {

  //set users
  // const [users, setUsers] = useState([])
  
  const [post, setPost] = useState([])


  // useEffect(() => {
  //   setUsers([...users, setUsers(post)])
  // },[post])


  return (
    <AppContainer>
    <Headline>User Onboarding</Headline>
    <Form post={post} setUsers={setPost} />

    </AppContainer>
  );
}

const Headline = styled.h1`
  font-size: 4.5rem;
  color: #fff;
  text-align: center;
  padding: 2rem;
  text-transform: uppercase;
`

const AppContainer = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  height: 100vh;
  background: #373B44;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4286f4, #373B44);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4286f4, #373B44); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export default App;

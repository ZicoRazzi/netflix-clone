import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { SigninHeader } from "../containers/signinHeader";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";

export default function Signup() {
  const navigate = useNavigate()
  const { firebase } =useContext(FirebaseContext)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 const isInvalid = firstName === '' || password === '' || email === ''

 const handleSignup = (e) => {
   e.preventDefault()

   //firebase work here!
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => result.user.updateProfile({
      displayName: firstName,
      photoURL: Math.floor(Math.random() * 5 + 1)
    })
    .then(() => {
      navigate('/browse')
    })
    )   
    .catch((error) => {
      setFirstName('')
      setEmail('')
      setPassword('')
      setError(error.message)
    })
 }


  return (
    <>
    <SigninHeader>
      <Form>
        <Form.Title>Sign Up</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignup} method="POST">
        <Form.Input
            placeholder="First name"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
          />
          <Form.Input
            placeholder="Email address"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <Form.Input
            type="Password"
            placeholder="Password"
            autoComplete="off"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign Up
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          Already a user? <Form.Link to='/signin'>
            Sign in now.
          </Form.Link>
        </Form.Text>
        <Form.TextSmall>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
        </Form.TextSmall>
      </Form>
    </SigninHeader>

    <FooterContainer />
  </>
  );
}

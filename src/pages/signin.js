import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { SigninHeader } from "../containers/signinHeader";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";


export default function Signin() {
  const { firebase } = useContext(FirebaseContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

 const isInvalid = password === '' || email === ''

 const handleSignin = (e) => {
   e.preventDefault()

   //firebase work here!
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      //push to the browse page
      navigate('/browse')
    })   
    .catch((error) => {
      setEmail('')
      setPassword('')
      setError(error.message)
    })
 }

  return (
    <>
      <SigninHeader>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
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
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to='/signup'>
              Sign up now.
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

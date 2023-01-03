import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/Firebase'

const SignIn = () => {

  const logGoogleUser = async() => {
    const response = await signInWithGooglePopup()
    console.log(response)
  }


  return (
    <div>
        <button onClick={logGoogleUser}>Sign In With Google</button>
        <h1>SIGN IN</h1>
    </div>
  )
}

export default SignIn
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function AuthState() {
    const [authUser, setAuthUser] = useState('')
    const navigate = useNavigate()
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }  
    }, [authUser])
    })

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/signin')
          }).catch((error) => {
            // An error happened.
          });
    }

  return (
    <div>{ authUser ? <><p>Hello, {authUser.displayName}</p> <Button varient='outlines' color='error' onClick={handleSignOut}>Sign Out</Button></> : <p>Signed Out</p>}</div>
  )
}
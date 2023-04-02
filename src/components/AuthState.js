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
                console.log(user)
                const uid = user.uid;
                // ...
            } else {
              setAuthUser('')
            }  
    }, [authUser])
    })

    //fucntion to handle sign out of user
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // redirect to sign in page
            navigate('/signin')
          }).catch((error) => {
            // An error happened.
          });
    }

  return (
    <div>
      { authUser ? 
        <>
          <p>Hello, {authUser.displayName}</p>
          <Button varient='outlined' color='error' onClick={handleSignOut}>Sign Out</Button>
        </> 
        : 
          <p>Signed Out</p>  
      }
    </div>
  )
}
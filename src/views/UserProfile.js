import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AuthState from '../components/AuthState';
import ProfileCard from '../components/ProfileCard';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { auth } from '../firebase';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default function UserProfile() {

  const [authUser, setAuthUser] = useState('')
  const [edit, setEdit] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')  

    // ---------------------------------useEffect hook to authenticate users-----------------------------------
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

    // ---------------------------------Update profile info function-----------------------------------
    const editProfile = (event) =>{
      setEdit(true)
    }
    const submitEditProfile = () =>{
      setEdit(false)
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      setEdit(false)
    }

  return (
    <div className="profile-page-container">
      <Box className="watchlist-header"
            sx={{
              pt: 4,
              pb: 4,
              width: '60%',
            }}
          >    
          { edit ? 
              <>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) => {setName(event.target.value)}}
                  sx={{ borderRadius: '5px', backgroundColor: 'white'}}
                  />
                <Button onClick={submitEditProfile} type='submit' variant="outlined" color="primary">Submit</Button>
              </>
            :
              <div>      
                <img src="https://pbs.twimg.com/media/EwnMiM2WgAQAH6y.jpg" alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
                <h2 className="my-3">{authUser.displayName}</h2>
                <h5>{authUser.email}</h5>

                <button onClick={editProfile} type="button" className="btn btn-outline-primary">Edit</button>
              </div>
          }  
      </Box>
        {/* <ProfileCard/> */}
    </div>
  )
}

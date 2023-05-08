import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AuthState from '../components/AuthState';
import ProfileCard from '../components/ProfileCard';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { auth } from '../firebase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default function UserProfile() {

  const [authUser, setAuthUser] = useState('')  

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

  return (
    <div className="profile-page-container">
      <Box className="watchlist-header"
            sx={{
              pt: 4,
              pb: 4,
              width: '60%',
            }}
          >          
              <img src="https://pbs.twimg.com/media/EwnMiM2WgAQAH6y.jpg" alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
              <h2 className="my-3">{authUser.displayName}</h2>
              <button type="button" className="btn btn-outline-primary">Edit</button>
          </Box>
        {/* <ProfileCard/> */}
    </div>
  )
}

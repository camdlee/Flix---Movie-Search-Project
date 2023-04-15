import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AuthState from '../components/AuthState';
import ProfileCard from '../components/ProfileCard';



export default function UserProfile() {

    


  return (
    <div className="welcome-card">
      <h1>Welcome</h1>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" sxc={{ width: 100, height: 100}}src="/static/images/avatar/1.jpg" />
      </Stack>
      <ProfileCard></ProfileCard>
    </div>
  )
}

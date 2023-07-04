import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AuthState from '../components/AuthState';
import ProfileCard from '../components/ProfileCard';
import { useState, useEffect } from 'react';
import { onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { auth, db } from '../firebase';
import { collection, addDoc, doc, getDocs, setDoc, refEqual, updateDoc } from "firebase/firestore";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



export default function UserProfile() {

  // const [authUser, setAuthUser] = useState('')
  // const [edit, setEdit] = useState(false)

  // //---------- New User Info ------------
  // const [name, setName] = useState('')  
  // const [email, setEmail] = useState('')
  // const [title, setTitle] = useState('')
  // const [bio, setBio] = useState('')
  // const [password, setPassword] = useState('')
  // const usersCollectionRef = collection(db, 'users')
  // const user = auth.currentUser;

  // if (user !== null){
  //   user.providerData.forEach((profile) => {
  //     console.log('Name: '+ profile.displayName)
  //   });
    // const displayName = user.displayName;
    // const email = user.email;
    // const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;
    // const uid = user.uid;
  };
  
  // ---------------------------------Update profile info function-----------------------------------
  // const editProfile = (event) =>{
  //   // console.log(usersCollectionRef)
  //   setEdit(true)
  // }
  // const submitUpdatedProfile = async (event) =>{
  //   event.preventDefault();
  //   const user = auth.currentUser;
  //   const auth = getAuth()

  //   try {
  //     await updateDoc(usersCollectionRef, {
  //     })
  //   } catch(err) {
  //     console.error(err)
  //   }
  //   setEdit(false)
  // }

  // const handleChange = () => {

  // }
  // const handleClick = () => {

  // }


  // ---------------------------------useEffect hook to authenticate users-----------------------------------
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //           setAuthUser(user)
  //           const uid = user.uid;
  //           // ...
  //       } else {
  //         setAuthUser('')
  //       }  
  //     }, [authUser])
  //     })
  

//   return (
//     <div className="profile-page-container">
//       <Box className="watchlist-header"
//             sx={{
//               pt: 4,
//               pb: 4,
//               width: '60%',
//             }}
//           >    
//           { edit ? 
//               <div onSubmit={updateProfile}>
//                 <img src="https://pbs.twimg.com/media/EwnMiM2WgAQAH6y.jpg" alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
//                 <input
//                   type="file"
//                   onChange={handleChange}
//                 />
//                 <Button onClick={handleClick} variant="outlined" color="primary">Upload</Button>
//                 <input
//                   type='text' 
//                   placeholder="Name"
//                   onChange={(event) => {setName(event.target.value)}}
//                 />
//                 <input 
//                   type='text'
//                   placeholder="Email"
//                   onChange={(event) => {setEmail(event.target.value)}}
//                 />
//                 <input 
//                   type='text'
//                   placeholder="Title"
//                   onChange={(event) => {setTitle(event.target.value)}}
//                 />
//                 <input 
//                   type='text'
//                   placeholder="Bio"
//                   onChange={(event) => {setBio(event.target.value)}}
//                 />
//                 <Button type='submit'onClick={submitUpdatedProfile} variant="outlined" color="primary">Submit</Button>
//               </div>
//             :
//               <>      
//                 <img src="https://pbs.twimg.com/media/EwnMiM2WgAQAH6y.jpg" alt="avatar" className="rounded-circle img-fluid" style={{width: 150}} />
//                 <h2 className="my-3">{authUser.displayName}</h2>
//                 <h5>{authUser.email}</h5>
//                 <Button onClick={editProfile} type="button" variant="outlined" color="primary">Edit</Button>
//               </>
//           }  
//       </Box>
//         {/* <ProfileCard/> */}
//     </div>
//   )
// }

import React from 'react'
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { doc, setDoc, collection, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';


const theme = createTheme();

export default function CharacterSearch() {

  const [character, setCharacter] = useState('')
  const [characterData, setCharacterData] = useState('')

  //function to get character data
  const getCharacterData = async (name) => {
    // fetching from api
    const response = await fetch(`https://swapi.dev/api/people/?search=${name}`)
    // awating response and saving as variable
    const data = await response.json()
    // console.log to see what we get
    console.log(data)

    // fetch images
    const image = await fetch(``)

    setCharacterData({
      name: name,
      birthYear: data.results[0].birth_year,
      species: data.results[0].species[0],
      height: data.results[0].height
    })

    console.log(characterData)
  }
    // function to handle submit
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(character)
      //const championTitle = champion[0].toUpperCase() + champion.slice(1,).toLowerCase()
      getCharacterData(character)
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <img src='https://mcdn.wallpapersafari.com/medium/96/43/2iV0HB.jpg'/>
          <Typography component="h1" variant="h5">
            Star Wars Character Search
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="character"
              label="character"
              name="character"
              onChange={(event) => {setCharacter(event.target.value)}}
              autoFocus
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

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
import MovieCard from '../components/MovieCard';


//API key: d6e8c594608b69b399328bb6aaf9ae05
//API request: https://api.themoviedb.org/3/movie/550?api_key=d6e8c594608b69b399328bb6aaf9ae05

const theme = createTheme();

export default function MovieSearch() {

    const [movie, setMovie] = useState('')
    const [movieData, setMovieData] = useState('')

    //function to get movie data
    const getMovieData = async (movieName) => {
        //fetching from omdb api
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d6e8c594608b69b399328bb6aaf9ae05&query=${movieName}`)
        const data = await response.json()
        console.log(data)

        //fetching backdrop image
        const backdropImage = await fetch(`http://image.tmdb.org/t/p/w1280${data.results[0].poster_path}`)

        //fetching Movie poster image
        const posterImage = await fetch(`http://image.tmdb.org/t/p/w342${data.results[0].poster_path}`)

        setMovieData({
          title: data.results[0].original_title,
          releaseDate: data.results[0].release_date,
          language: data.results[0].original_language,
          poster: posterImage.url,
          description: data.results[0].overview,
          rating: data.results[0].vote_average,
        })

        console.log(movieData)
    }


    // function to handle submit
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(movie)
      //const championTitle = champion[0].toUpperCase() + champion.slice(1,).toLowerCase()
      getMovieData(movie)
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
            <img src=''/>
          <Typography component="h1" variant="h5">
            Movie Search
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="movie"
              label="Movie"
              name="movie"
              onChange={(event) => {setMovie(event.target.value)}}
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
            <MovieCard movieData={movieData}/>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

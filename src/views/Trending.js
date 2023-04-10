import React from 'react'
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MovieCard from '../components/MovieCard';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


//https://api.themoviedb.org/3/trending/all/day?api_key=d6e8c594608b69b399328bb6aaf9ae05
// Trending movie request: https://api.themoviedb.org/3/trending/movie/day?api_key=d6e8c594608b69b399328bb6aaf9ae05
// Trending tv show request: https://api.themoviedb.org/3/trending/tv/day?api_key=d6e8c594608b69b399328bb6aaf9ae05

const theme = createTheme();

export default function Trending() {
    
    const [movies, setMovies] = useState('');
    //const [movieData, setMovieData] = useState('');
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [watchList, setWatchlist] = useState([]);


    //======================= UseEffect hook to update as input changes ================
    useEffect(() => {
      //console.log('search movie changed')
      // fetching data from api 
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=d6e8c594608b69b399328bb6aaf9ae05&query=${movies}`)
        // waiting for response
        .then(response => response.json())
        // set state of searched movies with data pulled by response.json()
        .then(data=>{
          console.log(data)
          setSearchedMovies(data.results)
        })
        // anytime movies state changes, the steps above 
    }, [movies])

    //console.log(searchedMovies)

    //====================== Function to handle submit =============================
    const handleSubmit = (event) => {
      event.preventDefault();
      //console.log(movies)
      //getMovieData(movies)
    };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
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
            Search Movies and Shows
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width:'50%', }} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="movie"
              label=""
              name="movie"
              onChange={(event) => {setMovies(event.target.value)}}
              autoFocus
            />
          </Box>
            <Box sx={{ flexGrow: 1, paddingTop: '50px', }}>
              <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {searchedMovies.map(movie => {
                          return(
                            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} sx={{ my: 1 }}>
                              <MovieCard
                                key={movie.id}
                                title={movie.original_title}
                                backdrop={movie.backdrop_path}
                                genres={movie.genre_ids} 
                                releaseDate={movie.release_date}
                                language={movie.original_language} 
                                poster={movie.poster_path} 
                                description={movie.overview} 
                                rating={movie.vote_average} 
                              />
                              </Grid>
                        )
                        })}
                    </Grid>
              </Container>
            </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

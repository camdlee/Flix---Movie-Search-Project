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
import Button from '@mui/material/Button';
import Dropdown from 'react-bootstrap/Dropdown';



//API key: d6e8c594608b69b399328bb6aaf9ae05
//API request: https://api.themoviedb.org/3/movie/550?api_key=d6e8c594608b69b399328bb6aaf9ae05
// Example search: https://api.themoviedb.org/3/search/movie?api_key=d6e8c594608b69b399328bb6aaf9ae05&query=avengers

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function MovieSearch() {

    const [movies, setMovies] = useState('');
    //const [movieData, setMovieData] = useState('');
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [watchList, setWatchlist] = useState([]);
    const genres_dict = {
      Action: 28,
      Adventure: 12,
      Animation: 16,
      Comedy: 35,
      Crime:80,
      Documentary:99,
      Drama:18,
      Family:10751,
      Kids:10762,
      Fantasy:14,
      History:36,
      Horror:27,
      Music:10402,
      Mystery:9648,
      News:10763,
      Reality:10764,
      Romance:10749,
      'Sci-Fi & Fantasy':10765,
      Soap:10766,
      Talk:10767,
      'War & Politics':10768,
      'Science Fiction':878,
      'TV Movie':10770,
      Thriller:53,
      War:10752,
      Western:37
    }

    //======================= Previous function hardcoded to display data for first search result========================
    // //function to get movie data
    // const getMovieData = async (movieName) => {
    //     //fetching from movie database api
    //     const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d6e8c594608b69b399328bb6aaf9ae05&query=${movieName}`)
    //     const data = await response.json()
    //     //console.log(data.results)
        
    //     //fetching backdrop image
    //     const backdropImage = await fetch(`http://image.tmdb.org/t/p/w1280${data.results[0].poster_path}`)

    //     //fetching Movie poster image
    //     const posterImage = await fetch(`http://image.tmdb.org/t/p/w342${data.results[0].poster_path}`)

    //     // with search results, we need to set state of searched movies
    //     setSearchedMovies(data.results)

    //     setMovieData({
    //       title: data.results[0].original_title,
    //       releaseDate: data.results[0].release_date,
    //       language: data.results[0].original_language,
    //       poster: posterImage.url,
    //       description: data.results[0].overview,
    //       rating: data.results[0].vote_average,
    //     })
    //     console.log(movieData)
    // }


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


    //============================== For Filter Dropdown Menu ====================================
    //------ UseState to change the filter setting anytime user clicks a category-------
    const [filterCat, setFilterCat] = useState('');
    const filteredResults = searchedMovies.filter(movie => {
      //console.log(movie)
      //console.log(filterCat)
      return movie.genre_ids.toString().includes(filterCat)
    })
    //----------- handleFilter function to get the genre from the dropdown menu --------
    const handleFilter = (event) => {
      setFilterCat(genres_dict[event.target.innerText])
      //console.log(filterCat)
      }

    //============================== Reset Filter ====================================
    const resetFilter = (event) => {
      setFilterCat('')
      return searchedMovies
    }


  return (
    <ThemeProvider theme={theme}>
      <main className="explore-container">
      <Container component="main">
        <CssBaseline />
        <Box 
          className="explore-header"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
          <Typography component="h1" variant="h5">
            Explore Movies and Shows
          </Typography>

          {/* -------------------- INPUT SEARCH BAR ------------------------- */}
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width:'50%', }} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="movie"
              label="Search"
              name="movie"
              onChange={(event) => {setMovies(event.target.value)}}
              autoFocus
              sx={{ borderRadius: '5px', backgroundColor: 'white' }}
            />
          </Box>
            <div className="explore-actions">
              {/* -------------------- DROPDOWN FILTER ------------------------- */}
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Filter By Genre
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleFilter}>Action</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Adventure</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Animation</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Comedy</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Crime</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Documentary</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Drama</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Family</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Kids</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Fantasy</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>History</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Horror</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Music</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Mystery</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>News</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Reality</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Romance</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Sci-Fi & Fantasy</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Science Fiction</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Soap</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Talk</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>War & Politics</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>TV Movie</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Thriller</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>War</Dropdown.Item>
                  <Dropdown.Item onClick={handleFilter}>Western</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* -------------------- RESET FILTER ------------------------- */}
              <Button onClick={resetFilter} variant="outlined" color="primary">
                Reset Filter
              </Button>
            </div>
        </Box>

          {/* -------------------- MOVIE RESULTS CARD DISPLAY ------------------------- */}
            <Box sx={{ flexGrow: 1, paddingTop: '20px', }}>
              <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {filteredResults.map(movie => {
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
      </Container>
      </main>
    </ThemeProvider>
  )
}

import * as React from 'react';
import './MovieCard.css';
import { useState, useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';


export default function MovieCard({key, title, backdrop, genres, releaseDate, language, poster, description, rating}) {

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    //backgroundImage: `http://image.tmdb.org/t/p/w1280${backdrop}`,
    border: '1px solid #000',
    borderRadius: '20px',
    boxShadow: '24 white',
    p: 4,
  };

  const genres_dict = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    10762: 'Kids',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10763: 'News',
    10764: 'Reality',
    10749: 'Romance',
    10765: 'Sci-Fi & Fantasy',
    10766: 'Soap',
    10767: 'Talk',
    10768: 'War & Politics',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
  }

  // --------------------------- Parsing through genre prop to get movie genres ---------------
  const displayGenres = (event) => {
    console.log(movieGenres)
    //console.log(movieGenres)
  }
  //{genres} prop is an array of genre ids, so we have to parse through the array and match it to the dictionary we have of genre ids
  const movieGenres = []
  for (let genre of {genres}.genres) {
    movieGenres.push(genres_dict[genre])
  }


  const [open, setOpen] = React.useState(false);
  //const [movieGenres, setMovieGenres] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //------------------- Function to add to Firestore ---------------------
  const addMovieToFirebase = async () => {
    //console.log('starting firestore process')
    try{
      await setDoc(doc(db, "users", auth.currentUser.uid, "watch_list", title), {
        title: title,
        backdrop: backdrop,
        genres: genres,
        releaseDate: releaseDate,
        language: language,
        poster: `http://image.tmdb.org/t/p/w342${poster}`,
        description: description,
        rating: rating
      })
      console.log('Added to Watch List');
    } 
    catch (error) {
      console.log('Error adding to Watch List')
    }
  }


  
  return (
    <Card sx={{ 
      height: '100%', 
      display:'flex', 
      maxWidth: 345, 
      margin: '2%', 
      flexDirection: 'column', 
      backgroundColor: '#000e1aff',
      color: '#f7f7f2ff',
      borderColor: '#000e1aff',
      border: '1px solid #000',
      borderRadius: '10px',
      p: 2,
      }}>
      <CardMedia
          component="img"
          height= 'auto'
          image={`http://image.tmdb.org/t/p/w342${poster}`}
          alt="movie poster"
          sx={{
            border: '1px solid #000',
            borderRadius: '10px',
          }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color: '#f7f7f2ff'}}>
              Released Date: {releaseDate}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{color: '#f7f7f2ff'}}>
              Genres: {movieGenres.map(genre => {
                        return(genre+" | ")
                      }
                      )}
            </Typography>
        </CardContent>
      <CardActions>
          <Button onClick={handleOpen} variant="contained" size="small" color="primary" sx={{backgroundColor: '#003a66ff', color: '#f7f7f2ff'}}>See More</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                      {title}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Genres: {movieGenres.map(genre => {
                        return(genre+" | ")
                      }
                      )}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {description}
                  </Typography>
                  <Button onClick={addMovieToFirebase} variant="contained" size="small" color="primary" sx={{marginTop: '3%', backgroundColor: '#003a66ff', color: '#f7f7f2ff'}}>
                    Add to Watch List
                  </Button>
                </Box>
              </Modal>
          <Button onClick={addMovieToFirebase} variant="contained" size="small" sx={{backgroundColor: '#003a66ff', color: '#f7f7f2ff'}}>
            Add to Watch List
          </Button>
      </CardActions>
    </Card>
  );
}
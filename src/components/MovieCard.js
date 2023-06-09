import React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';
import Alert from '@mui/material/Alert';


export default function MovieCard({key, title, backdrop, genres, releaseDate, language, poster, description, rating}) {

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: '#000e1aff',
    color: '#f7f7f2ff',
    border: '1px solid #000',
    borderRadius: '10px',
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

  // ------------------ Alert that movie was successfully added ---------------
  const [addedtoWatchList, setAddedtoWatchList] = useState(false);

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
      setAddedtoWatchList(true)
      console.log('Added to Watch List');
    } 
    catch (error) {
      console.log('Error adding to Watch List')
    }
  }




  
  return (
    <Card className="movie-card grow"
    sx={{ 
      height: '100%', 
      display:'flex', 
      maxWidth: 345, 
      margin: '2%', 
      flexDirection: 'column', 
      backgroundColor: '#000e1aff',
      color: '#f7f7f2ff',
      borderRadius: '10px',
      p: 2,
      }}>
      <CardMedia
          component="img"
          height= 'auto'
          image={`http://image.tmdb.org/t/p/w342${poster}`}
          alt="movie poster"
          sx={{
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
        <div>
          <Button onClick={handleOpen} variant="outlined" size="small" color="primary">See More</Button>
        </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalStyle}>
                  <CardMedia
                                component="img"
                                height= 'auto'
                                image={`https://image.tmdb.org/t/p/w1280${backdrop}`}
                                alt="movie poster"
                            />
                  <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
                      {title}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {movieGenres.map(genre => {
                        return(genre+" | ")
                      }
                      )}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ my: 2 }}>
                      {description}
                  </Typography>
                  {addedtoWatchList ? (
                      <Alert variant="outlined" severity="success" size="small" 
                        sx={{ 
                          py: 0,
                          px: 1,
                          color: 'green',
                        }}
                        >
                        Successfully added!
                      </Alert>
                    ):(
                      <Button onClick={addMovieToFirebase} variant="outlined" size="small">
                        Add to Watch List
                      </Button>
                  )}
                </Box>
              </Modal>
              <div
                sx={{
                  display: 'flex',
                  justifyContent:'center',
                  m: 0,
                  p: 'auto'
                }}
              >
                {addedtoWatchList ? (
                        <Alert variant="outlined" severity="success" size="small" 
                          sx={{ 
                            py: 0,
                            px: 1,
                            color: 'green',
                          }}
                          >
                          Successfully added!
                        </Alert>
                      ):(
                        <Button onClick={addMovieToFirebase} variant="outlined" size="small">
                          Add to Watch List
                        </Button>
                    )}
              </div>
      </CardActions>
    </Card>
  );
}
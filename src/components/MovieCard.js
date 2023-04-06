import * as React from 'react';
import { useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';

export default function MovieCard({title, backdrop, genres, releaseDate, language, poster, description, rating}) {


  const removeFromFirebase = async () => {
    await deleteDoc(doc(db, "users", auth.currentUser.uid, 'watch_list'))
    //this.props.currentWatchList()
  }

  // function to add to firestore
  const addMovieToFirebase = async () => {
    //console.log('starting firestore process')
    try{
      await setDoc(doc(db, "users", auth.currentUser.uid, "watch_list", title), {
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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`http://image.tmdb.org/t/p/w342${poster}`}
          alt="movie poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           <small>Released Date: {releaseDate}</small> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={addMovieToFirebase} variant="contained" size="small" color="primary">
          Add to Watch List
        </Button>
      </CardActions>
    </Card>
  );
}
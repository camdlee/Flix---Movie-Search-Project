import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';

export default function MovieCard({key, title, releaseDate, language, poster, description, rating}) {


  const removeFromFirebase = async () => {
    await deleteDoc(doc(db, "users", auth.currentUser.uid, 'watch_list'))
    this.props.currentWatchList()
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
        <Button onClick={removeFromFirebase} variant="contained" size="small" color="primary">
          Add to Watch List
        </Button>
        <Button
            variant='contaied'
          color='warning'
        >
        </Button>
      </CardActions>
    </Card>
  );
}
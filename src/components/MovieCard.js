import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';

export default function MovieCard({movieData}) {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={movieData.poster}
          alt="movie poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movieData.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           <small>Released: {movieData.releaseDate}</small> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movieData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
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
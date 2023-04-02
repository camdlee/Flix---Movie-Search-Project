import * as React from 'react';
import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';

export default function MovieCard() {

    //const {setFavChamp} = useContext(AppContext)

    // const removeFromFirebase = async () => {
    //     await deleteDoc(doc(db, "users", auth.currentUser.uid, "champions", ))
    //     this.props.currentTeam()
    // }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={this.props.movie.poster}
          alt="movie poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.movie.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           <small>{this.props.movie.releaseDate}</small> 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {this.props.movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="small" color="primary">
          Remove
        </Button>
        <Button
            variant='contaied'
          color='warning'
        >
          Add as Favorite
        </Button>
      </CardActions>
    </Card>
  );
}
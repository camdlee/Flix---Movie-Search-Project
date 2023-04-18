import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { doc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';



export default function WatchListCard(props) {


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: '#000e1aff',
    color: '#f7f7f2ff',
    //backgroundImage: `http://image.tmdb.org/t/p/w1280${backdrop}`,
    border: '1px solid #000',
    borderRadius: '10px',
    p: 4,
  };

  //-------------------------- Display Genres ----------------------------------
  //{genres} prop is an array of genre ids, so we have to parse through the array and match it to the dictionary we have of genre ids
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
  const movieGenres = []
  for (let genre of props.watchList.genres) {
    movieGenres.push(genres_dict[genre])
  }

  //-------------------------- Modal -------------------------------------------
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  //------------------- Function to remove from Firestore ---------------------
  const removeFromFirebase = async () => {
    await deleteDoc(doc(db, "users", auth.currentUser.uid, 'watch_list', props.watchList.title))
    //this.props.currentWatchList()
  }


  return (
    <Card className="watchlist-card grow"
    sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        backgroundColor: '#000e1aff',
        color: '#f7f7f2ff',
        borderRadius: '10px',
        p: 2, 
    }}>
    <CardMedia
        component="img"
        height= 'auto'
        image={`http://image.tmdb.org/t/p/w342${props.watchList.poster}`}
        alt="movie poster"
    />
    <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
            {props.watchList.title}
        </Typography>
    </CardContent>
        <CardActions>
                <Button onClick={handleOpen} variant="outlined" size="small" color="primary">See More</Button>
                    <Modal 
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <CardMedia
                                component="img"
                                height= 'auto'
                                image={`https://image.tmdb.org/t/p/w1280${props.watchList.backdrop}`}
                                alt="movie poster"
                            />
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mt: 2 }}>
                               {props.watchList.title}
                            </Typography>
                            <Typography variant="body2">
                                Release Date: {props.watchList.releaseDate}
                            </Typography>
                            <Typography variant="body2">
                                {movieGenres.map(genre => {
                                        return(genre+" | ")
                                        }
                                        )}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {props.watchList.description}
                            </Typography>
                        </Box>
                    </Modal>
            <Button onClick={removeFromFirebase} variant="outlined" color="error" size="small">Remove from List</Button>
        </CardActions>
    </Card>
  );
}




import * as React from 'react';
import { useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db, auth } from '../firebase';



export default function WatchListCard(watchList) {


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    //backgroundImage: `http://image.tmdb.org/t/p/w1280${backdrop}`,
    border: '1px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //------------------- Function to remove from Firestore ---------------------
  const removeFromFirebase = async () => {
    await deleteDoc(doc(db, "users", auth.currentUser.uid, 'watch_list'))
    //this.props.currentWatchList()
  }


  return (
    <Card sx={{ 
        height: '100%', 
        display: 'flex', 
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
        image={`http://image.tmdb.org/t/p/w342${watchList.watchList.poster}`}
        alt="movie poster"
    />
    <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
            Title: {watchList.watchList.title}
        </Typography>
    </CardContent>
        <CardActions>
                <Button onClick={handleOpen} variant="contained" size="small" color="primary">See More</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Title: {watchList.watchList.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Released Date: {watchList.watchList.releaseDate}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Desciption: {watchList.watchList.description}
                            </Typography>
                        </Box>
                    </Modal>
            <Button onClick={removeFromFirebase} size="small">Remove from List</Button>
        </CardActions>
    </Card>
  );
}




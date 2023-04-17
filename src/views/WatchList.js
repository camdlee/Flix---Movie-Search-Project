import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { doc, getDoc, collection, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase';
import WatchListCard from '../components/WatchListCard';


const theme = createTheme();

export default function Album() {

  const [watchList, setWatchList] = useState([])
  

  // const viewWatchList = () =>{
  //   const WatchList = []
  //   const subColRef = collection(db, "users", auth.currentUser.uid, "watch_list")
  //   onSnapshot(subColRef, (querySnapshot) => {
  //     querySnapshot.forEach((doc) => {
  //       WatchList.push(doc.data())
  //     }) 
  //     setWatchList(WatchList)
  //     //console.log(WatchList)
  //   })
  // }

  useEffect(()=>{
    const WatchList = []
    const subColRef = collection(db, "users", auth.currentUser.uid, "watch_list")
    onSnapshot(subColRef, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        WatchList.push(doc.data())
      }) 
      setWatchList(WatchList)
    })
  }, [])



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="watchlist-container">
        {/* Hero unit */}
        <Box className="watchlist-header"
          sx={{
            pt: 4,
            pb: 4,
            width: '60%',
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              fontWeight="medium"
              gutterBottom
            >
              My Watch List
            </Typography>
            <Typography align="center" paragraph>
              Saved movies and shows for later
            </Typography>
            {/* <Button onClick={viewWatchList} variant="outlined">View Watch List</Button> */}
          </Container>
        </Box>
        
        <Container maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {watchList.map((watchList) => {return (
              <Grid item key={watchList.key} xs={12} sm={6} md={4} lg={3} sx={{ my: 1 }}>
                <WatchListCard
                  watchList={watchList}
                />
              </Grid>
            )})}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

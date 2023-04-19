import React from 'react'
import { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Carousel from 'react-bootstrap/Carousel';

//https://api.themoviedb.org/3/trending/all/day?api_key=d6e8c594608b69b399328bb6aaf9ae05
// Trending movie request: https://api.themoviedb.org/3/trending/movie/day?api_key=d6e8c594608b69b399328bb6aaf9ae05
// Trending tv show request: https://api.themoviedb.org/3/trending/tv/day?api_key=d6e8c594608b69b399328bb6aaf9ae05

const theme = createTheme();

export default function Trending() {
    
    const [trending, setTrending] = useState('');
    //const [movieData, setMovieData] = useState('');
    const [trendingData, setTrendingData] = useState([]);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    // const trendingData = async() =>{
    //   fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=d6e8c594608b69b399328bb6aaf9ae05`)
    //           // waiting for response
    //     .then(response => response.json())
    //     // set state of searched trending with data pulled by response.json()
    //     .then(data=>{
    //       console.log(data)
    //     })
    // } 


    //======================= UseEffect hook to search trending info ================
    useEffect(() => {
      const callTrending=()=>{
              // fetching data from api 
      fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=d6e8c594608b69b399328bb6aaf9ae05`)
        // waiting for response
        .then(response => response.json())
        // set state of searched trending with data pulled by response.json()
        .then(data=>{
          console.log(data)
          let dataResults = data.results
          setTrendingData(dataResults)
          console.log(trendingData)
        })
      }
      callTrending()
      console.log(trendingData)
        // anytime trending state changes, the steps above 
    }, [])

    useEffect(()=>{
      if(trendingData.length > 0){
        console.log(trendingData)
      }
    }, [trendingData])



  return (
    <>
    {trendingData.length > 0 ? (  
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{ borderRadius: '20px' }}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w1280/${trendingData[0].backdrop_path}`}
            alt="First slide"
            style={{ borderRadius: '20px' }}
          />
        <Carousel.Caption>
          <h4>{trendingData[0].title}</h4>
          <p>{trendingData[0].overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ borderRadius: '20px' }}>
        <img
          className="d-block w-100"
         src={`https://image.tmdb.org/t/p/w1280${trendingData[1].backdrop_path}`}
          alt="Second slide"
          style={{ borderRadius: '20px' }}
        />
          <Carousel.Caption>
            <h4>{trendingData[1].title}</h4>
            <p>{trendingData[1].overview}</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ borderRadius: '20px' }}>
        <img
          className="d-block w-100"
         src={`https://image.tmdb.org/t/p/w1280${trendingData[2].backdrop_path}`}
          alt="Third slide"
          style={{ borderRadius: '20px' }}
        />
        <Carousel.Caption>
          <h4>{trendingData[2].title}</h4>
          <p>{trendingData[2].overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ borderRadius: '20px' }}>
        <img
          className="d-block w-100"
         src={`https://image.tmdb.org/t/p/w1280${trendingData[3].backdrop_path}`}
          alt="Third slide"
          style={{ borderRadius: '20px' }}
        />
        <Carousel.Caption>
          <h4>{trendingData[3].title}</h4>
          <p>{trendingData[3].overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ borderRadius: '20px' }}>
        <img
          className="d-block w-100"
         src={`https://image.tmdb.org/t/p/w1280${trendingData[4].backdrop_path}`}
          alt="Third slide"
          style={{ borderRadius: '20px' }}
        />
        <Carousel.Caption>
          <h4>{trendingData[4].title}</h4>
          <p>{trendingData[4].overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>        
    ):(
          <p>loading</p>
        )}
      </>
  );
}

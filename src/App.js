import './App.css';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home';
import SignUp from './views/SignUp'
import SignIn from './views/SignIn'
import CharacterSearch from './views/CharacterSearch';
import MovieSearch from './views/MovieSearch';
import WatchList from './views/WatchList';

// API key: 8f106539
// http://www.omdbapi.com/?i=tt3896198&apikey=8f106539


export default function App() {


  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/character' element={<CharacterSearch/>}/>
          <Route path='/movie' element={<MovieSearch/>}/>
          <Route path='/watchlist' element={<WatchList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
}


import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home';
import SignUp from './views/SignUp'
import SignIn from './views/SignIn'
import MovieSearch from './views/MovieSearch';
import WatchList from './views/WatchList';
import UserProfile from './views/UserProfile';
import Footer from './components/Footer';
import Trending from './components/Trending';
import Navbar from './components/Nav';



export default function App() {


  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/movie' element={<MovieSearch/>}/>
          <Route path='/watchlist' element={<WatchList/>}/>
          <Route path='/profile' element={<UserProfile/>}/>
          <Route path='/trending' element={<Trending/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    );
}


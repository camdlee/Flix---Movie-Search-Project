import './App.css';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home';
import SignUp from './views/SignUp'
import SignIn from './views/SignIn'
import CharacterSearch from './views/CharacterSearch';

// API key: 8f106539
// http://www.omdbapi.com/?i=tt3896198&apikey=8f106539


export default function App() {
  //set hooks
  const[name, setName] = useState('Dylan')
  const[age, setAge] = useState(99)

  const addOne = () => {
    setAge(age + 1)
  }

  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home age={age} addOne={addOne} name={name}/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/character' element={<CharacterSearch/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
}


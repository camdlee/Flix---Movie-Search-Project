import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav'
import Home from './views/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom'



// export default function App() {
//   //setting up hooks
//   const[name, setName] = useState('')
//   const[age, setAge] = useState()

//   const addOne = () => {
//     setAge(age + 1)
//   }
//   return (
//     <BrowserRouter>
//       <div>
//         <Nav/>
//           <Routes>
//             <Route path='/' element={<Home age={age} addOne={addOne} name={name}/>}/>
//           </Routes>
//       </div>
//     </BrowserRouter>
//   )
// }



function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Post from './Post';
import NewPost from './NewPost';


function App() {
  return (
    <div className="App">
  
   <BrowserRouter>
   <Routes>
    {/* <Route path='/post' element={<Post/>}/> */}
    <Route path='/newPost' element={<NewPost />}></Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
   </BrowserRouter>
    
    </div>
  );
}

export default App;

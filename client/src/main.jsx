import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Main from './pages/Main.jsx';
import Login from './pages/Login.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main/>} /> 
    <Route path="/auth/" element={<Login/>} /> 

  </Routes>
</BrowserRouter>
)

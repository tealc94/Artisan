import React, { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Home from './components/Home';
import ListeArtisan from './components/ListeArtisan';
import Mentions from './components/MentionLegales';
import DonneePersonnelle from './components/DonneePersonnelles';
import Accessibilite from './components/accessibilite';
import Cookies from './components/cookies';
import NotFound from './components/NotFound';
import Artisan from './components/Artisan';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() { 
  
  const [artisans, setArtisans] = useState([]);
  
  const getArtisans = async () => {
      const response = await fetch("./datas.json");
      const data = await response.json();
  
      setArtisans(data);
  };

  useEffect(() => {
      getArtisans();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout artisans={artisans}/>}>
          <Route index element={<Home/>}/>
          <Route path='/artisan/:category' element={<ListeArtisan artisans={artisans}/>}/>          
          <Route path="/artisan/:category/:id" element={<Artisan artisans={artisans}/>}/>
          <Route path='/artisan/mentions' element={<Mentions/>}/>
          <Route path='/artisan/donnees-personnelles' element={<DonneePersonnelle/>}/>
          <Route path='/artisan/accessibilite' element={<Accessibilite/>}/>
          <Route path='/artisan/cookies' element={<Cookies/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>        
      </Routes>      
    </div>
  );
}

export default App;
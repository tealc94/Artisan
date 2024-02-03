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
 
  /*----------------*/
  const [artisans, setArtisans] = useState([]);
  
  const getArtisans = async () => {
      const response = await fetch("./datas.json");
      const data = await response.json();
  
      setArtisans(data);
  };

  useEffect(() => {
      getArtisans();
  }, []);


  /*----------------*/

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout artisans={artisans}/>}>
          <Route index element={<Home/>}/>
          <Route path='/:category' element={<ListeArtisan artisans={artisans}/>}/>
         {/*} <Route path='batiment' element={<ListeArtisan artisans={artisans}/>}/>
          <Route path='Services' element={<ListeArtisan artisans={artisans}/>}/>
          <Route path='fabrication' element={<ListeArtisan/>}/>
          <Route path='alimentation' element={<ListeArtisan/>}/>*/}
          
          <Route path="/artisan/:id" element={<Artisan artisans={artisans}/>}/>
        {/*  <Route path='/artisan'element={<Artisan artisans={artisans}/>}/> */}

          <Route path='mentions' element={<Mentions/>}/>
          <Route path='donnees-personnelles' element={<DonneePersonnelle/>}/>
          <Route path='accessibilite' element={<Accessibilite/>}/>
          <Route path='cookies' element={<Cookies/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
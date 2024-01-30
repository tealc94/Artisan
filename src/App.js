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

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='batiment' element={<ListeArtisan/>}/>
          <Route path='Services' element={<ListeArtisan/>}/>
          <Route path='fabrication' element={<ListeArtisan/>}/>
          <Route path='alimentation' element={<ListeArtisan/>}/>
          <Route path='*' element={<NotFound/>}/>

          <Route path='mentions' element={<Mentions/>}/>
          <Route path='donnees-personnelles' element={<DonneePersonnelle/>}/>
          <Route path='accessibilite' element={<Accessibilite/>}/>
          <Route path='cookies' element={<Cookies/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
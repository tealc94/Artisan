import "../css/listeartisan.css";

import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useEffect } from "react";

const ListeArtisan = ({ artisans }) => {
  const [ searchTerm, setSearchTerm ] = useState("");
  const [filtered, setFiltered] = useState(artisans);
  const { category } = useParams();

  useEffect(() => {
    //recherche au clique
      setFiltered(artisans.filter(artisan => artisan.category === category ))
  }, [category])

  const handleSearch = (e) => { 
    //recherche par la saisie
    setSearchTerm(e.target.value);
    setFiltered(artisans.filter( artisan =>  
      artisan.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
      artisan.location.toLowerCase().includes(e.target.value.toLowerCase()) || 
      artisan.specialty.toLowerCase().includes(e.target.value.toLowerCase())
    ))
  }
    
  return (    
    <main className="bloc_listArtisan">
      <p>
        <input 
        type="text" 
        placeholder="Nom, Spécialité, ville" 
        onChange={handleSearch}
        />
        <FontAwesomeIcon icon={faSearch} size="lg" style={{color: "#384050"}}/>
      </p>
      <div className="container_listArtisan">
        <ul>
          {filtered.map((item, index) => (
              <Link key={item.id} to={`/artisan/${category}/${item.id}`}>
                <article className="container_list" key={index}>
                    <li>Nom de l'artisan:<br/> {item.name}</li>
                    <li><Rating size="large" name="read-only" value={item.note} precision={0.1} readOnly /></li>
                    <li>Spécialité: {item.specialty}</li>
                    <li>Localisation: {item.location}</li>
                </article>
              </Link>   
            ))}            
        </ul> 
      </div> 
    </main>
  );
};
    
export default ListeArtisan;
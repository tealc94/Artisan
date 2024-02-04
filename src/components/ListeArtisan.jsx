import "../css/listeartisan.css";

import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const ListeArtisan = ({ artisans }) => {
  const {category } = useParams();

  const handleClick = () => {};

  return (    
      <div className="bloc_listArtisan">
        <div className="container_listArtisan">
          <ul>
            {(() => {
              const blocArtisans = [];
              for (let i = 0; i < artisans.length; i++) {
                if(artisans[i].category === category) {
                  blocArtisans.push(                    
                    <Link key={artisans[i].id} to={`/artisan/${category}/${artisans[i].id}`} onClick={() => handleClick(artisans[i].id)}>
                      <div className="container_list" key={i}>
                        <li>
                          <p>Nom de l'artisan:<br/> {artisans[i].name}</p>
                          <Rating size="large" name="read-only" value={artisans[i].note} precision={0.1} readOnly />
                          <p>Spécialité: {artisans[i].specialty}</p>
                          <p>Localisation: {artisans[i].location}</p>
                        </li>
                      </div>
                    </Link>                  
                  )  
                }     
              }
              return blocArtisans;
            })()}

            {/* ---autre méthode pour la fiche d'un artisan
            const ListeArtisan = ({ artisans, category: propCategory}) => {
            const artisansFiltered = artisans.filter(artisan => artisan.category === category);
            {artisansFiltered.map(artisan => (
              <a key={artisan.id} href={`/artisans/${artisan.id}`}>  
                <div className="container_list">
                  <li>
                    <p>Nom de l'artisan:<br/> {artisan.name}</p>
                    <Rating size="large" name="read-only" value={artisan.note} precision={0.1} readOnly />
                    <p>Spécialité: {artisan.specialty}</p>
                    <p>Localisation: {artisan.location}</p>
                  </li>
                </div>
              </a>
            ))} */}        
          </ul> 
        </div> 
      </div>
    );
  };
    
export default ListeArtisan;    
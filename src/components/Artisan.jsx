/*import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";

const Artisan = () => {
    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getArtisanById = async () => {
            try {
                const response = await fetch("./datas.json");

                if (!response.ok) {
                    throw new Error(`Erreur de chargement des données: ${response.status}`);
                }

                const data = await response.json();

                const foundArtisan = data.find((a) => a.id === parseInt(id, 10));

                if (foundArtisan) {
                    setArtisan(foundArtisan);
                } else {
                    console.log("Aucun artisan trouvé pour l'ID ", id);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            } finally {
                setLoading(false);
            }
        };

        getArtisanById();
    }, [id]);

    if (loading) {
        return <div>Chargement en cours....</div>;
    }

    if (!artisan) {
        return <div>Aucun artisan trouvé pour l'ID {id}</div>;
    }

    console.log("Artisan trouvé :", artisan);
    return (
        <div>
            <p>Nom: {artisan.name}</p>
            <Rating size="large" name="read-only" value={artisan.note} precision={0.1} readOnly />
            <p>Spécialité: {artisan.specialty}</p>
            <p>Localisation: {artisan.location}</p>
        </div>
    );
};

export default Artisan;*/

/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Artisan = () => {
  const { id } = useParams();
  
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArtisanById = async () => {
      try {
        const response = await fetch("./datas.json");
console.log(response);
        if (!response.ok) {
          throw new Error(`Erreur de chargement des données: ${response.status}`);
        }

        const data = await response.json();

        if (!id){
            return <div>Aucun ID</div>;
          }

        const foundArtisan = data.find((a) => a.id === id);
        if (!foundArtisan) {
            return <div>Aucun artisan trouvé pour l'ID {id}</div>;
          }

        console.log('Page Artisan.jsx appelée avec l\'ID :', id);
        if (foundArtisan) {
          setArtisan(foundArtisan);
        } else {
          console.log("Aucun artisan trouvé pour l'ID ", id);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      } finally {
        setLoading(false);
      }
    };

    getArtisanById();
  }, [id]);

  if (loading) {
    return <div>Chargement en cours....</div>;
  }

  if (!artisan) {
    return <p>L'artisan n'a pas été trouvé.</p>;
  }

  return (
    <div>
      <h2>{artisan.name}</h2>
    
    </div>
  );
};

export default Artisan;*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Artisan = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    const getArtisanById = async () => {
      
        const response = await fetch("/datas.json");     
        const data = await response.json();
        const foundArtisan = data.find((a) => a.id === id);

        if (foundArtisan) {
          setArtisan(foundArtisan);
        } else {
          console.log("Aucun artisan trouvé pour l'ID ", id);
        }      
    };

    getArtisanById();
  }, [id]);

  if (!artisan) {
    return <div>Aucun artisan trouvé</div>;
  }

  return (
    <div>
      <h2>{artisan.name}</h2>
      
    </div>
  );
};

export default Artisan;
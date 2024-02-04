import '../css/artisan.css';

import { Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Artisan = () => {
  const { id, category } = useParams();
  const [artisan, setArtisan] = useState(null);
/************************* *
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

  try {
    const response = await fetch('http://localhost:1080/maildev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'johndoe@gmail.com',
        to: 'tealc972@hotmail.com',
        subject: formData.subject,
        text: `De: ${formData.name}\n\n${formData.message}`
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result);
    

    console.log("l'objet: ",formData.subject, "le nom de l'artisan :", formData.name, "et le message :", formData.message);
      if (result.success) {
        console.log('E-mail envoyé avec succès');
      // Ajoutez ici le code pour gérer le succès de l'envoi
      }
    }else{
        console.error('Erreur lors de la requête HTTP', response.statusText);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail', error);
      // Ajoutez ici le code pour gérer l'erreur de requête HTTP
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

************************* */
  useEffect(() => { 
    const getArtisanById = async () => {
      
        const response = await fetch("/datas.json"); 
        console.log(response);    
        const data = await response.json();
        const foundArtisan = data.find((a) => a.id === id && a.category === category);

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
    <div className='bloc_artisan'>
      <div className='detail_artisan'>
        <p>Nom de l'artisan: {artisan.name}</p>
        <Rating size="large" name="read-only" value={artisan.note} precision={0.1} readOnly />
        <p>Spécialité: {artisan.specialty}</p>
        <p>Localisation: {artisan.location}</p>
        <p>Site internet: {artisan.website}</p>
        <p>A propos: {artisan.about}</p>
      </div>
      <div className='formulaire'>
        <fieldset>
          <form action="" method='post'>
              <div>
                  <input type="text" placeholder="Votre nom" required name='name'/>
              </div>
              <div>
                  <input type="text" placeholder="Objet" name='subject' />
              </div>
              <div>
                  <textarea cols="35" rows="10" placeholder="Votre message" ></textarea>
              </div>
              <button type="submit">Envoyer</button>
          </form>
          </fieldset>
      </div>
    </div>
    
  );
};

export default Artisan;
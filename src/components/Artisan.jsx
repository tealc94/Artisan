import '../css/artisan.css';

import { Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Artisan = () => {
  const { id, category } = useParams();
  const [artisan, setArtisan] = useState(null);

/*gestion de l'envoi du mail*/
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

  try {
    const response = await fetch('http://localhost:1080/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',        
      },
      body: JSON.stringify({
        from: 'johndoe@gmail.com',
        to: 'johndoe@gmail.com',
        subject: formData.subject,
        text: `De: ${formData.name}\n\n${formData.message}`
      }),
    });
    console.log("url ",response);
    if (response.ok) {
      await response.json();
      setFormData({
        name: '',
        subject: '',
        message: ''
      },()=>{});    
    }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

/************************* */
  useEffect(() => { 
    const getArtisanById = async () => {
      
        const response = await fetch("/datas.json"); 
        const data = await response.json();
        const foundArtisan = data.find((a) => a.id === id && a.category === category);

        if (foundArtisan) {
          setArtisan(foundArtisan);
        }       
    };

    getArtisanById();
  }, [id, category]);

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
          <form action="" method='post'onSubmit={handleFormSubmit}>
              <div>
                  <input className="nom" type="text" placeholder="Votre nom" required name='name' onChange={handleInputChange}/>
              </div>
              <div>
                  <input className="objet" type="text" placeholder="Objet" name='subject' onChange={handleInputChange}/>
              </div>
              <div>
                  <textarea cols="35" rows="10" placeholder="Votre message" onChange={handleInputChange}></textarea>
              </div>
              <button type="submit">Envoyer</button>
          </form>
          </fieldset>
      </div>
    </div>    
  );
};

export default Artisan;
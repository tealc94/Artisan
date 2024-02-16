import '../css/artisan.css';

import { Rating } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Artisan = () => {
  const { id, category } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [ formatMail, serFormatMail ] = useState({
    name:"",
    subject: "",
    message: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    alert("Votre message a bien été envoyé à l'artisan.");
    serFormatMail({
      name:"",
      subject: "",
      message: "",
    })
  }

/*gestion de l'envoi du mail
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
      alert()  
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

************************ */
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
    <main className='bloc_artisan'>
      <article className='detail_artisan'>
        <ul>
          <li>Nom de l'artisan: {artisan.name}</li>
          <li><Rating size="large" name="read-only" value={artisan.note} precision={0.1} readOnly /></li>
          <li>Spécialité: {artisan.specialty}</li>
          <li>Localisation: {artisan.location}</li>
          <li>Site internet: {artisan.website}</li>
          <li>A propos: {artisan.about}</li>
        </ul>        
      </article>
      <div className='formulaire'>
        <fieldset>
          <form action="" method='post'onSubmit={handleFormSubmit}>
              <div>
                  <input className="nom" type="text" placeholder="Votre nom" required name='name' value={formatMail.name} onChange={(e) => serFormatMail({...formatMail, name:e.target.value})}/>
              </div>
              <div>
                  <input className="objet" type="text" placeholder="Objet" name='subject' value={formatMail.subject} onChange={(e) => serFormatMail({...formatMail, subject:e.target.value})}/>
              </div>
              <div>
                  <textarea cols="35" rows="10" placeholder="Votre message" name="message" value={formatMail.message} onChange={(e) => serFormatMail({...formatMail, message:e.target.value})}></textarea>
              </div>
              <button type="submit">Envoyer</button>
          </form>
          </fieldset>
      </div>
    </main>    
  );
};

export default Artisan;
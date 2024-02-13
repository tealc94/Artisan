import "../css/home.css";

import React, {useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Rating } from "@mui/material";

function Home() {

    const [artisans, setArtisans] = useState([]);

    const getArtisans = async () => {
        const response = await fetch("./datas.json");
        const data = await response.json();

        setArtisans(data);
    };
  
    useEffect(() => {
        getArtisans();
    }, []);

    return(
        <main>
            <h1 className="text-center">Trouver l'artisan parfait pour votre projet !</h1>
            <div className="container_artisan">
                <section>      
                    <div className="lign1"></div> 
                    <h2>Comment trouver mon artisan ?</h2>
                    <article>
                        <h3>Etape 1: Choisissez une catégorie d'artisan dans le menu</h3>
                        <p>Explorez notre menu pour trouver la catégorie d'artisanat qui correspond à vos besoins. 
                            Que ce soit la menuiserie, la peinture, la plomberie, ou d'autres métiers, 
                            nous avons une variété d'artisans qualifiés.</p>
                    </article>
                    <article>
                        <h3>Etape 2: Sélectionnez un artisan</h3>
                        <p>Parcourez la liste d'artisans disponibles dans la catégorie choisie. 
                            Chaque artisan est présenté avec des informations détaillées sur son expérience, 
                            ses compétences et ses réalisations précédentes.</p>
                    </article>
                    <article>
                        <h3>Etape 3: Contactez l'artisan</h3>
                        <p>Remplissez le formulaire de contact dédié à l'artisan choisi. Précisez vos besoins, 
                            la nature de votre projet, et ajoutez tout détail important. Cliquez sur "Envoyer" 
                            pour transmettre votre demande.</p>
                    </article>
                    <article>
                        <h3>Etape 4: Attendez une réponse sous 48h</h3>
                        <p>Notre équipe s'engage à vous fournir une réponse dans les 48 heures suivant votre demande. 
                            Nous comprenons l'importance de votre projet et nous travaillons diligemment pour 
                            vous connecter avec l'artisan idéal.</p>
                    </article>                    
                </section>
                <section>
                    <div className="lign2"></div> 
                    <h2>Les trois artisans du mois</h2>
                    <div className="container_card">
                        {artisans.filter(item => item.top).map(item =>(
                            <Card key={item.id} style={{ width: "320px" }}>
                                <Card.Body>
                                    <Card.Text>  
                                        <p>Nom de l'artisan:<br/>{item.name}</p>
                                        <Rating size="large" name="read-only" value={item.note} precision={0.1} readOnly /> 
                                        <p>Spécialité: {item.specialty}</p> 
                                        <p>Localisation: {item.location}</p>   
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>                                     
                </section>
            </div>            
        </main>
    )
}

export default Home;
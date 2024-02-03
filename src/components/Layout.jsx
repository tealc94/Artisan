import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faMapMarkerAlt, faPhone, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

/*import React, { useState, useEffect} from "react";*/
import React from "react";
/*import { Link } from "react-router-dom";*/

function MenuHeader() {

  /*-----------------
  const [artisans, setArtisans] = useState([]);

  const getArtisans = async () => {
      const response = await fetch("./datas.json");
      const data = await response.json();
  
      setArtisans(data);
  };

  useEffect(() => {
      getArtisans();
  }, []);

  /*-----------------*/

  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-header">
      <Container className="menu-container">
        <Navbar.Brand href="/"><img className="image_menu" src="/assets/Logo.png" alt="logo trouve ton artisan" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">               
            <input type="text" 
                    placeholder="Rechercher"
                    /><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{color: "#384050",}} />
            
          {/*   <Nav.Link as={Link} className="menuLink" to="/Bâtiment">Batiment</Nav.Link>
              {artisans.filter(item => item.top === "Bâtiment").map(item =>(
                <Nav.Link as={Link} key={item.id} to={`batiment/${item.id}`}>{item.name}</Nav.Link>              
              ))}
            <Nav.Link as={Link} className="menuLink" to="/Services">Services</Nav.Link>
              {artisans.filter(item => item.top === "Services").map(item =>(
                <Nav.Link as={Link} key={item.id} to={`services/${item.id}`}>{item.name}</Nav.Link>              
              ))} 
            <Nav.Link as={Link} className="menuLink" to="/Fabrication">Fabrication</Nav.Link>
              {artisans.filter(item => item.top === "Fabrication").map(item =>(
                <Nav.Link as={Link} key={item.id} to={`fabrication/${item.id}`}>{item.name}</Nav.Link>              
              ))}
            <Nav.Link as={Link} className="menuLink" to="/Alimentation">Alimentation</Nav.Link>
            {artisans.filter(item => item.top === "Alimentation").map(item =>(
              <Nav.Link as={Link} key={item.id} to={`alimentation/${item.id}`}>{item.name}</Nav.Link>              
            ))} */}


            
            <Nav.Link className="menuLink" href="Bâtiment">Batiment</Nav.Link>
            <Nav.Link className="menuLink" href="Services">Services</Nav.Link>    
            <Nav.Link className="menuLink" href="Fabrication">Fabrication</Nav.Link> 
            <Nav.Link className="menuLink" href="Alimentation">Alimentation</Nav.Link>          
          </Nav>
        </Navbar.Collapse>        
      </Container>
    </Navbar>
  );
}

export {MenuHeader};

function MenuFooter() {
  return (
    <div className="container_footer">
      <div className="container_address">
        <p className="text_titre">Lyon</p>
        <address>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" style={{color: "#ffffff",}} />101 cours Charlemagne 
          <p className="text_adresse">CS 20033</p>
          <p className="text_adresse">69269 LYON CEDEX 02</p>
          <p className="text_adresse">France</p>
          <FontAwesomeIcon icon={faPhone} size="lg" style={{color: "#ffffff",}} />+33 (0)4 26 73 40 00
        </address>        
      </div>   
      <div className="lign"></div>   
        <div>
          <Nav className="justify-content-center navbar-footer" activeKey="/home">
            <Nav.Item>
              <Nav.Link className="textLink" href="mentions">Mention légales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="textLink" href="donnees-personnelles">Données personnelles</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="textLink" href="accessibilite">Accessibilité</Nav.Link>
            </Nav.Item>    
            <Nav.Item>
              <Nav.Link className="textLink" href="cookies">Cookies</Nav.Link>
            </Nav.Item>    
          </Nav> 
        </div>         
    </div>      
  );
}

export {MenuFooter};

export default function Layout() {
  return(
    <>
      <header>
        <MenuHeader/>
      </header>
      <Outlet />
      <footer className="App-footer"> 
        <MenuFooter/>
      </footer>
    </>
  )  
}
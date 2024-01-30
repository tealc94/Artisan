import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

function MenuHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-header">
      <Container className="menu-container">
        <Navbar.Brand href="/"><img className="image_menu" src="/assets/Logo.png" alt="logo trouve ton artisan" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="batiment">Batiment</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>    
            <Nav.Link href="fabrication">Fabrication</Nav.Link> 
            <Nav.Link href="alimentation">Alimentation</Nav.Link>           
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
        <MenuFooter></MenuFooter>
      </footer>
    </>
  )  
}
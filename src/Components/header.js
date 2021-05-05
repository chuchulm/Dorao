import React from 'react'
import { Link } from "react-router-dom"
import '../styles/header.css';
import logo from '../img/logo.png';
import Portafolio from './Portafolio';
import Carousel from'./carousel';

function Header(){

    return(

        
     
        <header className="container2">
          <div>
              <img src={logo} alt="" className="logo"></img>
          </div>
                   
          <div className="App">
              <div className="cabecera">
                 <nav>
                    <a href="#">Inicio</a>
                    <a href="#">Colecciones</a>
                    
                    <a href="#">Carousel</a>
                    
                    <a href="#">Contacto</a>
                 </nav>
            </div>
          </div>


          <div className="wave" >
             <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave1">
                 <path d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
                  className="wave2"></path>
            </svg>
          </div>
          
        </header>
     
    )
}

export default Header;



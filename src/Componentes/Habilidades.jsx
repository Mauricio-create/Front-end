import React from 'react';
import '../index.css'
import bloque_habilidades from '../bloqueHabilidades';
import Bloque from './bloqueHabilidades';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Services(){
    return(
    <div className='Services'>


        <h4 style= {{color:"#C6A664"}}>Destrezas</h4>
        <h1>Habilidades</h1>
        <p>
            Mi objetivo es aplicar los conocimientos adquiridos laboral y academicamente,<br />
            así como poner a prueba las habilidades y destrezas que poseo, para que me ayuden<br />
            a crecer como persona y profesionalmente. 
        </p>
        
        {bloque_habilidades.map(content => (
            <Bloque 
                key = {content.key}
                icon={content.iconBloque}
                title = {content.titleBloque}
                info = {content.infoBloque}
                tiempo = {content.tiempoBloque}
                descripcion = {content.descripcionBloque}
            />
        ))}
        <br />

    </div>
    );
}
export default Services; 
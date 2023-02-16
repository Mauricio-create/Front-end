import React from 'react';
import '../index.css'
import bloque_habilidades from '../bloqueHabilidades';
import Bloque from './bloqueHabilidades';
import { FaPython, FaHtml5, FaJs, FaComments} from "react-icons/fa";

function Services(){
    return(
    <div className='Services'>


        <h4 style= {{color:"#C6A664"}}>Destrezas</h4>
        <h1>Habilidades</h1>
        <p>
            Mi objetivo es aplicar los conocimientos adquiridos laboral y academicamente,<br></br>
            así como poner a prueba las habilidades y destrezas que poseo, para que me ayuden<br></br>
            a crecer como persona y profesionalmente. 
        </p>
        
        {bloque_habilidades.map(content => (
            <Bloque 
                key = {content.key}
                icon={content.iconBloque}
                title = {content.titleBloque}
                info = {content.infoBloque}
            />
        ))}
        

    </div>
    );
}
export default Services; 
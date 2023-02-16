import React from 'react';
import '../index.css'
 function Bloque(props){
    return(
        <div className='bloqueHabilidadesEstilo'>
            {props.icon}
            <h3>{props.title}</h3>
            <p>{props.info}</p>
        </div>
    );
 }
 export default Bloque; 
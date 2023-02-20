import React from 'react';
import '../index.css'
 function Bloque(props){
    return(
        <div style = {{display:'inline-block'}}>
            <div className='bloqueHabilidadesEstilo'>
                {props.icon}
                <h3>{props.title}</h3>
                <p>{props.info}</p>
            </div>
            <br />
            <h2 style = {{textAlign:"center"}}>{props.tiempo}</h2>
            <p style = {{textAlign:"centerq"}}>{props.descripcion}</p>
        </div>
    );
 }
 export default Bloque; 
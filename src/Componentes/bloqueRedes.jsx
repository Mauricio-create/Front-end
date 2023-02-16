import React from "react";
import '../index.css'

function Redes(props){
    return(
        <div className = "bloque_redes">    
        {props.icon}
        <p>{props.contact}</p>
        </div>
    );
}
export default Redes;
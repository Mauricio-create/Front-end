import React from "react";
import '../index.css'
import Redes from "./bloqueRedes";
import { FaInstagram, FaPhoneAlt, FaEnvelopeSquare, FaLinkedinIn, FaFacebookF} from "react-icons/fa";


function Contacto (){
    return(
    <div className = "Contacto">
        <h4>Contacto</h4>
        <h1>Formas de contactarme</h1>
        <p>Estoy dispuesto a colaborar en proyectos para aprender y crecer profesionalmente. <br/>
            Al contactarme contesto casi de inmediato, a menos que esté en la escuela, <br/>
            pero siempre trato de contestar lo más rápido posible.
        </p><br />
        <Redes 
        key = {1}
        icon = {<FaInstagram />}
        contact = "castelazo.mauricio"
        />

        <Redes 
        key = {1}
        icon = {<FaPhoneAlt />}
        contact = "5564919638"
        />

        <Redes 
        key = {1}
        icon = {<FaEnvelopeSquare />}
        contact = "mauglezcast@gmail.com"
        />
        <br />
        <Redes 
        key = {1}
        icon = {<FaLinkedinIn />}
        contact = {<a href="https://www.linkedin.com/in/mauricio-gonz%C3%A1lez-castelazo-7ba635257/">Mauricio Gonzalez</a>}
        />
             <Redes 
        key = {1}
        icon = {<FaFacebookF />}
        contact = "Mauricio Castelazo"
        />
        <hr style = {{borderColor:"#C6A664", marginTop:"10vh", border:"2px solid"}}/>
        
   
    </div>
    );
}
export default Contacto;
import React from 'react';
import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion} from "framer-motion"
function desplegarTexto()
{
    
    if(document.getElementById('textoDesplegar').className === 'textoOculto')
    {
        document.getElementById('textoDesplegar').className = 'textoDesplegado'
    }
    else if(document.getElementById('textoDesplegar').className === 'textoDesplegado'){
        document.getElementById('textoDesplegar').className = 'textoOculto'
    }
}

function Header(){
    return (
        <Row className = 'Header'>
            <Col lg = {2} md = {2} sm = {12} className="headerLeft">
                <h1>Mauricio<br></br>González<h1 style={{color:"#C6A664"}}>.</h1></h1>
                <hr></hr>
                <p>Instagram | Linkedin</p>
                <p>Behance | Dribble</p>
                <motion.div whileTap={{ scale: 0.8 }} style = {{margin:"0px", padding:"0px"}}>
                    <button style = {{marginRight:"auto"}}>CONTACTO</button>
                </motion.div>
            </Col>

            <Col lg = {3} md = {2} sm = {12} className="headerMiddle">
                <img src = "https://w0.peakpx.com/wallpaper/650/789/HD-wallpaper-developer-walpaper-black-coding-developer-developing-programmer-programming-simple-technology-white.jpg"></img>
            </Col>

           <Col lg = {2} md = {2}  sm = {12}className="headerRight">
                <h5 style= {{color:"#C6A664", marginBottom:"10px"}}>INTRODUCCIÓN</h5>
                <h1>Estudiante <br></br>de la <br></br>Universidad Panamericana</h1>
                <p>
                    Mi nombre es Mauricio González Castelazo. Tengo 22 años,<br></br> y actualmente estoy cursando 
                    el sexto semestre de la <br></br>carrea de Ingeniería en Tecnologías de la Información <br></br>y 
                    Sistemas Inteligentes. 
                </p>

                <p id='textoDesplegar' className = "textoOculto">
                    He trabajado en Fibras Network<br></br> configurando switches. 
                    Actualmente estoy buscando la oportunidad <br /> de desarrollarme tanto profesionalmente como personalmente. <br /> 
                    por lo cual me gustaría trabajar en una empresa de desarrollo de software. 
                </p>
                <motion.div whileTap={{ scale: 0.8 }} style = {{margin:"0px", padding:"0px"}}>
                    <button style={{color:"#C6A664;", border: "0px solid"}} onClick = {desplegarTexto}>
                        Ver más
                    </button>
                </motion.div>

            </Col>
        </Row>
    );
}
export default Header; 
import React from 'react';
import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
    return (
        <Row className = 'Header'>
            <Col lg = {2} md = {4} sm = {12} className="headerLeft">
                <h1>Mauricio<br></br>González</h1>
                <h1 style={{color:"#C6A664"}}>.</h1>
                <hr></hr>
                <p>Instagram | Linkedin</p>
                <p>Behance | Dribble</p>
                <button>CONTACTO</button>
            </Col>

            <Col lg = {3} md = {4} sm = {12} className="headerMiddle">
                <img src = "https://w0.peakpx.com/wallpaper/650/789/HD-wallpaper-developer-walpaper-black-coding-developer-developing-programmer-programming-simple-technology-white.jpg"></img>
            </Col>

           <Col lg = {2} md = {4}  sm = {12}className="headerRight">
                <h5 style= {{color:"#C6A664", marginBottom:"10px"}}>INTRODUCCIÓN</h5>
                <h1>Estudiante <br></br>de la <br></br>Universidad Panamericana</h1>
                <p>
                    Mi nombre es Mauricio González Castelazo. Tengo 22 años,<br></br> y actualmente estoy cursando 
                    el sexto semestre de la <br></br>carrea de Ingeniería en Tecnologìas de la Información <br></br>y 
                    Sistemas Inteligentes.
                </p>
                <button style={{color:"#C6A664;", border: "0px solid"}}>
                    Ver más
                </button>

            </Col>
        </Row>
    );
}
export default Header; 
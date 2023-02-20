import { FaPython, FaHtml5, FaJs, FaComments} from "react-icons/fa";

const bloque_habilidades = [
    {
        key:1,
        iconBloque:<FaPython style={{color:"white",fontSize:"10vh"}}/>,
        titleBloque:"PYTHON",
        infoBloque:"Conocimiento medio-avanzado.",
        tiempoBloque:"3 +",
        descripcionBloque:"Años de expriencia"

    },
    {
        key:2,
        iconBloque:<FaHtml5 style={{color:"white",fontSize:"10vh"}}/>,
        titleBloque:"HTML",
        infoBloque:"Conocimiento medio en html.",
        tiempoBloque:"1 +",
        descripcionBloque:"Años de expriencia"
    },
    {
        key:3,
        iconBloque:<FaJs style={{color:"white",fontSize:"10vh"}}/>,
        titleBloque:"JS",
        infoBloque:"Conocimiento medio en js.",
        tiempoBloque:"1 +",
        descripcionBloque:"Años de expriencia"
    },
    {
        key:4,
        iconBloque:<FaComments style={{color:"white",fontSize:"10vh"}}/>,
        titleBloque:"INGLÉS.",
        infoBloque:"Nivel B2",
        tiempoBloque:"Certificaciones",
        descripcionBloque:"Cambrige Ket y FCE. Pearson Internation Certificate"
    }
];
export default bloque_habilidades;

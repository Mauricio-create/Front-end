import { FaPython, FaHtml5, FaJs, FaComments} from "react-icons/fa";

const bloque_habilidades = [
    {
        key:1,
        iconBloque:<FaPython style={{color:"white",fontSize:"10vh"}}/>,
        titleBloque:"PYTHON",
        infoBloque:"Conocimiento medio-avanzado."

    },
    {
        key:2,
        iconBloque:<FaHtml5 style={{color:"white",fontSize:"10vh"}}/>,
        titleBloque:"HTML",
        infoBloque:"Conocimiento medio en html."
    },
    {
        key:3,
        iconBloque:<FaJs style={{color:"white",fontSize:"10vh"}}/>,
        titleBloque:"JS",
        infoBloque:"Conocimiento medio en js."
    },
    {
        key:4,
        iconBloque:<FaComments style={{color:"white",fontSize:"10vh"}}/>,
        titleBloque:"INGLÉS.",
        infoBloque:"Nivel B2"
    }
];
export default bloque_habilidades;

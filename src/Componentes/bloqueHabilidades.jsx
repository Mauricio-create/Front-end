import React from 'react';
import { motion} from "framer-motion"
import '../index.css'
 function Bloque(props){
    return(
        <div style = {{display:'inline-block'}} className="BloqueMotion">
                <motion.div
                className="BloqueMotion"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
            <div className='bloqueHabilidadesEstilo'>
                {props.icon}
                <h3>{props.title}</h3>
                <p>{props.info}</p>
            </div>
            <br />
            <h2 style = {{textAlign:"center"}}>{props.tiempo}</h2>
            <p style = {{textAlign:"centerq"}}>{props.descripcion}</p>
            </motion.div>
        </div>
    );
 }
 export default Bloque; 
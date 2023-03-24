import React from "react";
import '../index.css'
import { motion} from "framer-motion"

function Redes(props){
    return(
        <motion.div
      className="bloque_redes"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
       > 
        {props.icon}
        <p>{props.contact}</p>
        </motion.div>

    );
}
export default Redes;
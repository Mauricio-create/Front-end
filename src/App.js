import './App.css';
import './index.css'
import Header from './Componentes/Header';
import Services from './Componentes/Habilidades';
import Contacto from './Componentes/Contacto';
import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="App">

      <Header></Header>
      <Services></Services>
      <Contacto></Contacto>      

    </div>
  );
}

export default App;

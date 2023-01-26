import './App.css';
import img_superman from './img/logo_superman.jpg';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const[numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    console.log('Clic');
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
    setNumClics(0);
  }

  return (
    <div className='App'>
      
      <div className='logo-contenedor'>
        <img className='logo'
        src={img_superman}
        alt='Logo personal' />
        
      </div>

      <div className='contenedor-principal'>
        <Contador numClics= { numClics } />


        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './components/Formularios'
import Citacomponent from './components/Citacomponent'

function App() {

  // citas LocalStorage

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales = [];
  }

  
  // Crear State con Citas Generales
  const [citas, setCitas] = useState(citasIniciales);

  //useEffect

  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas])




  // Funcion para crear citas

  const crearCita = cita => {
    setCitas([...citas, cita]);
    console.log(citas);
  }

  const eliminarCitas =  id => {
    const response = citas.filter(cita => cita.id !== id);
    setCitas(response)
  }

  // Mensaje Condicional

  const message = citas.length === 0 ? 'No hay citas disponible' : `Administra tus citas(${citas.length})`;

  return (
    <div className="App w-full min-h-screen px-4 py-12 lg:p-8">  
      <div>
        <h1 className='text-center text-2xl uppercase font-bold mb-2'>Administrador de Pacientes</h1>
        <p className='text-center text-gray-600 text-xs mb-8'>by Sebastian Vargas</p>
      </div>

      <div className='flex flex-col md:flex-row gap-12'>
        
        <div className='lg:w-1/2'>
            <Formulario 
              crearCita={crearCita}
            /> 
        </div>

        <div className='lg:w-1/2 space-y-6'>
            <h2 className="text-center uppercase font-bold text-xl mb-6">{message}</h2>
            {
              citas.map(cita => (
                <Citacomponent 
                  cita={cita}
                  key={cita.id}
                  eliminarCitas={() => eliminarCitas(cita.id)} 
                />
              ))
            }
        </div>
      </div>
     
    </div>
  )
}

export default App

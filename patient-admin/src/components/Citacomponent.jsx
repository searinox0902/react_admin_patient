import React from "react";
import PropTypes from 'prop-types';

const Citacomponent = ({cita, eliminarCitas}) => {

   
    return (
        <>
            <div className='card rounded-lg border border-white shadow-md shadow-black-200	p-4 backdrop-filter backdrop-blur-xl w-full text-center '>
              <div className='space-y-2 text-start '>
              
                <p><strong>Nombre máscota: </strong>   {cita.mascota} </p>
                <p><strong>Nombre Dueño: </strong>  {cita.propietario} </p>
                <p><strong>Nombre Fecha: </strong>   {cita.fecha}</p>
                <p><strong>Nombre Hora: </strong>   {cita.hora}</p>
                <p> <strong>sintomas :</strong>   {cita.sintomas}</p>
                <p> <strong>codigo :</strong>   {cita.id}</p>
              </div> 
              <button onClick={eliminarCitas} className='w-auto full text-center py-3 px-8 bg-red-400 mt-6 uppercase font-bold text-white tracking-widest rounded-full'>Eliminar &times;</button>            
            </div>
        </>
    )
}

Citacomponent.propTypes = {
    crearCita : PropTypes.func,
}



export default Citacomponent;
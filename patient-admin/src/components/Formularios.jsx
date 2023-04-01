import { Component, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    // crearState de citas 

    const [cita, setCita] = useState({
        mascota : '',
        propietario : '',
        fecha : '',
        hora : '',
        sintomas : '',
    })


    // crear State error 

    const [error, setError] = useState(false)


    // Desestructurar 

    const {mascota, propietario, fecha, hora, sintomas } = cita;


    //Funcion que se ejecuta cada que el usuario escribe  en un input

    const handleChange  = e => {
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })

    }

    const handleSubmit = e => {
        e.preventDefault();

        //validar

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            alert('Ingrese los datos correctamente');
            return
        }


        //asignarID

        cita.id = uuidv4();

        //crearCita

        crearCita(cita)

        //ReiniciarForm
        
        setCita({
            id: '',
            mascota : '',
            propietario : '',
            fecha : '',
            hora : '',
            sintomas : '',
        })
    }

    
    return (
        <>
            <h2 className="text-center uppercase font-bold text-xl mb-6">Crear Citas</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <p className="mb-3">Nombre Mascota</p>
                    <input onChange={handleChange} value={mascota} name="mascota" type="text" placeholder="Ingresa el nombre de Mascota" className="mb-4 w-full py-1 px-2 border border-gray-100 rounded-lg"  required/>    
                </label>

                <label>
                    <p className="mb-3">Nombre del Dueño</p>
                    <input onChange={handleChange} value={propietario} name="propietario" type="text" placeholder="Ingresa el nombre del Dueño" className="mb-4 w-full py-1 px-2 border border-gray-100 rounded-lg"  required/>    
                </label>

                <label>
                    <p className="mb-3">Fecha</p>
                    <input onChange={handleChange} type="date" name="fecha" value={fecha} className="mb-4 w-full py-1 px-2 border border-gray-100 rounded-lg" />    
                </label>

                <label>
                    <p className="mb-3">Hora</p>
                    <input onChange={handleChange} value={hora} name="hora" type="time" placeholder="Ingresa el nombre de Mascota" className="mb-4 w-full py-1 px-2 border border-gray-100 rounded-lg"  required/>    
                </label>
                
                <label>
                    <p className="mb-3">Síntomas</p>
                    <textarea onChange={handleChange} value={sintomas} name="sintomas" className="w-full rounded-lg border border-gray-100 p-1"></textarea>
                </label>

                <div className="text-center">
                    <button type="submit" className="w-auto text-white uppercase font-bold rounded-full bg-green-500 py-2 px-4 mt-6 tracking-widest">
                        Agregar Cita
                    </button>
                </div>
               
               
            </form>
        </>
    )
}

Formulario.propTypes = {
    cita : PropTypes.object,
    key : PropTypes.string,
    eliminarCitas : PropTypes.func,
}


export default Formulario;
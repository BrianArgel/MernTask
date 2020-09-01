import React, { useReducer } from 'react';
import uuid from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO,
         OBTENER_PROYECTOS,
         AGREGAR_PROYECTO
        } from '../../types';
import Proyecto from '../../components/proyectos/Proyecto';


const ProyectoState = props => {
    const proyectos = [
        { id:1, nombre: 'Tienda Virtual'},
        { id:2, nombre: 'Intranet'},
        { id:3, nombre: 'Diseño de sitio Web'}
    ]
    const initialState = {
      proyectos : [ ],
        formulario: false 
    }

    // Dispatch para ejecutar la acciones 
   const [state, dispatch] = useReducer(proyectoReducer, initialState)

   //Serie de funciones para el CRUD 
   const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
   }

   // Obtener proyectos
   const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
   }

   // agregar Nuevo Proyecto
   const agregarProyecto = proyecto =>{
       proyectos.id = uuid.v4();

       // Pasar el proyecto al state
       dispatch({
           type: AGREGAR_PROYECTO,
           payload: proyecto
       })
   }
   return (
       <proyectoContext.Provider
       value={{
           proyectos: state.proyectos,
           formulario: state.formulario,
           mostrarFormulario,
           obtenerProyectos,
           agregarProyecto

       }}
       >
          {props.children}
       </proyectoContext.Provider>
   )
}

export default ProyectoState;
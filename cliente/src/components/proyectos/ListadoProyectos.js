import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';


const ListadoProyectos = () => {
   
    // Extraer Proyectos de State Inicial
    const proyectosContext = useContext(proyectoContext);

    // Condicional proyecto tiene contenidos
    const {proyectos, obtenerProyectos} = proyectosContext;

    //Obtener proyecto cuando carga el proyecto
    useEffect(()=> {
        obtenerProyectos();
    }, [])

    if(proyectos.legth === 0) return null;

    
    return ( 
       <ul className="listado-proyectos">
           {proyectos.map(proyecto=> (
               <Proyecto
                proyecto= {proyecto}
               />
           ))}
       </ul>
     );
}
 
export default ListadoProyectos;
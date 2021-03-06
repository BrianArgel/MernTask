import React, {Fragment} from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Plataforma de pago', estado: true},
        {nombre: 'Elegir Hosting', estado: true}
        

    ]
    return ( 
    <Fragment>
        <h2>Proyecto: Tienda Virtual</h2>
        <ul className="listado-tareas">
        {tareasProyecto.length === 0 
        ? (<li className="tarea"><p>No hay tarea</p></li>)
        : tareasProyecto.map(tarea => (
           <Tarea 
           tarea={tarea}
            />
        ))
        }
         <button
        type="button"
        className="btn btn-eliminar"
        >Eliminar Proyecto &times;</button>
        </ul>
       
    </Fragment>
        
     );
}
 
export default ListadoTareas;
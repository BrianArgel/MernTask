import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const NuevaCuenta = () => {

    // State para inciar Sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    })
    const {email, password, nombre, confirmar} = usuario;

    const onChange = (e)=> {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })

    }
    //Cuando el usuario quiere inciar Sesion 
    const onSubmit = e => {
        e.preventDefault()


        //Validar Los datos


        //Pasar los datos
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Inciar Sesion</h1>
                <form
                onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label> 
                        <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu Nombre"
                        value={nombre}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label> 
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu email"
                        value={email}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Password</label> 
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Tu Password"
                        value={password}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Comfirmar Password</label> 
                        <input
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Confirmar Password"
                        value={confirmar}
                        onChange={onChange}
                        />
                    </div>
                    <div className="campo-form ">
                        <input  
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrarme"
                        />
                    </div>
                    <Link to={'/'} className="enlace-cuenta">
                         Iniciar Sesion
                    </Link>
                </form>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;
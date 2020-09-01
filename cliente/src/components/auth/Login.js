import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Login = () => {

    // State para inciar Sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })
    const {email, password} = usuario;

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
                    <div className="campo-form ">
                        <input  
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="iniciar Sesion"
                        />
                    </div>
                    <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                        Obtener Cuenta
                    </Link>
                </form>
            </div>
        </div>
     );
}
 
export default Login;
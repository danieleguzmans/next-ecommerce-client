import React from "react"

export default function LoginForm(props) {
    const {showRegisterForm} = props;
    console.log(props.showRegisterForm);
    return (
        <div>
            <h1>Estamos en el Formulario de Login</h1>
            <button onClick={showRegisterForm}>Ir al registro</button>
        </div>
    );
}

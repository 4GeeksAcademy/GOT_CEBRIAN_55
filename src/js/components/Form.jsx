

import React, { useState, useEffect } from "react";

const Form = ({ alEnviar }) => {
    const [nombre, setNombre] = useState("");
    const [frase, setFrase] = useState("");
    const [id, setId] = useState("");
    const [imagen, setImagen] = useState("");

    const envioDatos = (e) => {
        e.preventDefault();
        if (!nombre||!frase||!id||!imagen) {
            alert("Sin datos... ¡No aumentaremos nuestras tropas camarada!");
            return;
            
            
        }

        const datosPersonaje = {
            nombre: nombre, 
            frase: frase,
            id: id,
            imagen: imagen,
        };

        alEnviar(datosPersonaje);
        
        setFrase("");
        setImagen("");
        setId("");
        setNombre("");
    };

    return (
        <form  className= "form" onSubmit={envioDatos}>
            <input 
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => {setNombre(e.target.value)}}
            />
            <input 
                type="text"
                placeholder="Frase"
                value={frase}
                onChange={(e) => {setFrase(e.target.value)}}
            />
            <input 
                type="number"
                placeholder="Id"
                value={id}
                onChange={(e) => {setId(e.target.value)}}
            />
            <input 
                type="text"
                placeholder="Imagen"
                value={imagen}
                onChange={(e) => {setImagen(e.target.value)}}
            />
            <button type="submit">Agregar Personaje</button>
        </form>
    );
};

export default Form;
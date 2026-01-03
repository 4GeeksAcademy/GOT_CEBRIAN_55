import React from "react";

const Card = ({ nombre, frase, id, imagen }) => {
    return (
        <div className="col-md-4 mb-4 ">
        <div className="card h-100">

            <img src={imagen} alt={nombre} style={{height: "300px",objectFit: "cover" }} className="card-img-top" />
            <h3>{nombre}</h3>
            <p>"{frase}"</p>
            <span>ID- {id}</span>
        </div>
        </div>
    );
};

export default Card;
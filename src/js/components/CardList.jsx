
import React from "react";
import Card from "./Card"; 

const CardList = ({ personajes }) => {
    return (
        <div className="container my-5">
        <div className="row g-4 "> 
            {personajes.map((personajes) => (
                <Card 
                    key={personajes.id} 
                    nombre={personajes.nombre} 
                    frase={personajes.frase}
                    imagen={personajes.imagen}
                    id={personajes.id}
                />
            ))}
        </div>
        </div>
    );
};

export default CardList;
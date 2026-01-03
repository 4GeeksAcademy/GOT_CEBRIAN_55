import React, { useState, useEffect } from "react";
import Form from "/workspaces/GOT_CEBRIAN_55/src/js/components/Form.jsx"; 
import CardList from "/workspaces/GOT_CEBRIAN_55/src/js/components/CardList.jsx";
import Card from "/workspaces/GOT_CEBRIAN_55/src/js/components/Card.jsx";


const listaInicial = [
    {
        "frase": "I will take the Ring, though I do not know the way.",
        "nombre": "Frodo Baggins",
        "imagen": "https://static.wikia.nocookie.net/lotr/images/3/32/Frodo_%28FotR%29.png/revision/latest?cb=20221006065757",
        "id": 1
    },
    {
        "frase": "I can't carry it for you, but I can carry you!",
        "nombre": "Samwise Gamgee",
        "imagen": "https://www.theonering.net/torwp/wp-content/uploads/2013/05/samwise-gamgee.jpg",
        "id": 2
    },
    {
        "frase": "I would rather share one lifetime with you than face all the ages of this world alone.",
        "nombre": "Arwen",
        "imagen": "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2024/06/andy-serkis-gollum-lord-of-the-rings.webp",
        "id": 3
    },
    {
        "frase": "Even the smallest person can change the course of the future.",
        "nombre": "Galadriel",
        "imagen": "https://static0.srcdn.com/wordpress/wp-content/uploads/2022/09/Cate-Blanchett---The-Lord-Of-The-Rings-Trilogy.jpg",
        "id": 4
    },
    {
        "frase": "What about side-by-side with a friend?",
        "nombre": "Legolas",
        "imagen": "https://static.wikia.nocookie.net/bibliotecadelatierramedia/images/c/c0/Legolas.jpg/revision/latest?cb=20140322121446&path-prefix=es",
        "id": 5
    }
];

const App = () => {
    const [personajes, setPersonajes] = useState(listaInicial);

    const agregarPersonaje = (nuevoPersonaje) => {
        console.log("¡Has creado un nuevo personaje!");
        setPersonajes([...personajes, nuevoPersonaje]);
    };

	

    return (
		<div className="container">
        
            <h1>🧙‍♂️💍El Señor de los Anillos💍🧙‍♂️</h1>
            <Form alEnviar={agregarPersonaje} />
        
		<CardList personajes={personajes} />
		
		</div>
    );
}

export default App;
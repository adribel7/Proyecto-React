import React, {useState} from "react";

const Buscador =(props) => {
    const[texto, setTexto]= useState('');

    const onTextoChange = (evento) => {
        setTexto(evento.target.value);
    }
    const onBuscarClick= () => { 
        if (texto.length > 3){
        props.onBuscar(texto);
        }
    } 

    return (
        <section className="container-search">
            <div className=" justify-content-center align-content-center text-center ">
                <label for="email">
                    <input type="email" id="search" value={texto} onChange={onTextoChange} placeholder="Buscar alguna noticia"/> 
                </label>
                <button onClick={(onBuscarClick)} type="button" id="buttonSend" data-toggle="modal" data-target="#exampleModalCenter2">
                Buscar
                </button>
            </div>
        </section>
    )
};

export default Buscador;


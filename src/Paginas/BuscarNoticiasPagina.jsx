import {useState} from "react";
import ListaNoticias from "../Componentes/General/Noticias/ListaNoticias";
import Buscador from "../Componentes/General/Buscador";
import Imagen from "../Componentes/General/Imagen";
import Footer from '../Componentes/General/Footer';


const BuscarNoticiasPagina = () => {
    const [busqueda, setBusqueda]= useState('');
    const onBuscar = (criterio) => {
        setBusqueda(criterio);
    };
    return (<body> 
            <Imagen/>
            <Buscador onBuscar={onBuscar}/>                    
            <ListaNoticias busqueda={busqueda}/>
            <Footer/>
    </body>
    );
}
export default BuscarNoticiasPagina;
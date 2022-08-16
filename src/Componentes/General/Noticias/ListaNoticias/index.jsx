import { useEffect, useState } from "react";
import { getNoticias } from "../../../../Servicios/noticias";
import Loading from "../../Loading";
import Paginado from "../../Paginado";
import Noticia from "../Noticia";
import "./ListaNoticias.css";

const Noticias =({noticias}) => {
    return(
        <section className="lista-noticias">
            {noticias.map((val, index) => <Noticia key={index} {...val}/>)}
        </section>
    )
};

const ListaNoticias =({busqueda}) => {
    const [noticias, setNoticias]= useState();
    const[loading, setLoading]= useState(false);
    const[pagina,setPagina] =useState(1);
    const[cantidadPaginas, setCantidadPaginas] =useState (0);

    const getNoticiasDesdeServicio= async (busqueda, pagina) => {
        setLoading(true);
        const respuesta= await getNoticias(busqueda,pagina);
        setNoticias(respuesta.results);
        const totalPaginas= Math.ceil(parseInt(respuesta.totalResults)/10);
        setCantidadPaginas(totalPaginas);
        setLoading(false);
    };

    const onChangePaginacion =(_evento, p) => {
        setPagina(p);
    }

    useEffect(() => {
        if(busqueda){
            getNoticiasDesdeServicio(busqueda, pagina);
        }
    }, [busqueda, pagina]);

    if (loading) {
        return <Loading/>
    }

    if (!noticias){
        return null;
    }

    if (!noticias || noticias.length === 0){
        return (<section className="section-no-news">
            <h1>No se ha encontrado ninguna noticia</h1>
        </section>);
    }

    
    return(
        <>
            <Noticias noticias={noticias}/>
            <Paginado page= {pagina} count={cantidadPaginas} onChange={onChangePaginacion}/>
        </>
    )
};

export default ListaNoticias;


import { API_KEY, CATEGORY, NEWSDATA_API_HOST} from "./constantes";

export const getNoticias = async (criterioBusqueda='', pagina=1) => {
    try {
        const respuesta= await fetch(`${NEWSDATA_API_HOST}?apikey=${API_KEY}&q=${criterioBusqueda}&${CATEGORY}&page=${pagina}`);
        return respuesta.json();
    } catch(error) {
        console.log (error);
        return {isError: true};
    }
};
//https://newsdata.io/api/1/news?apikey=pub_96747e23ea414455d683b871ffe8abf4ba04&q=shakira&language=es&category=entertainment
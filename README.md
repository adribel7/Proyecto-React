# Proyecto de React 

El proyecto Final del curso de **React del INFORMATORIO 2022** trata de la realización de un **Buscador de Noticias** en nuestro caso, solamente de entretenimiento.

## Condiciones Generales

 El buscador debe estar disponible ya sea en la raíz (http://localhost) o en la ruta/buscador (http://localhost/buscador).
 En caso de que el usuario ingrese en una url inválida, se debe presentar una página de 404, con el mensaje recurso no encontrado, con los estilos apropiados.
 El proyecto debe contener mínimo 1 prueba unitaria.

## Detalles de la búsqueda

No se debe realizar la búsqueda a menos que el usuario haya escrito al menos 3 caracteres 
El botón buscar se debe habilitar cuando el input cumpla con la condición anterior.
Se deberá presentar un spinner/loading para que el usuario sepa de que se está realizando un procesamiento.
En caso de que no haya resultados, se deberá presentar un mensaje adecuado, que indique que no hay resultados para la búsqueda. 

## Obtenida la respuesta del servicio

Se deberá presenta una interfaz con los resultados obtenidos. 
Por cada noticia obtenida, se presenta : 
El título de la noticia / 
La imagen de portada de la noticia /
La fecha de publicación de la noticia en formato:dd-mm-aaaa - hh:mm hs. Ejemplo: Publicado el: 28-06-2022 a las 03:00 hs./
Cuando el usuario haga click sobre una noticia, la misma deberá de abrirse en una nueva pestaña.

## Requerimientos de Lista de Noticias

 Sobre el listado se debe de realizar: Mostrar la leyenda: Está viendo 10 noticias de {totalResults} resultados 
 Paginación, donde se presenten 10 noticias por vez.
 Lo importante es que se vean **10 noticias por página**.

## Servicio

Para poder realizar este proyecto, nos registramos en **https://newsapi.org/**. Al obtener la apikey, tuvimos disponible un endpoint, que nos permitió realizar la búsqueda de noticias. 
La información de los parámetros requeridos por el endpoint lo encontramos en: **https://newsdata.io/docs**

##

import Imagen_no_disponible from "./img-no-disponible.jpg";


const Noticia = ({title,image_url,description,pubDate,link}) => {

    return(
        <section className="section-news">
            <div className="container-fluid ">
                <div className="row justify-content-center align-content-start ">
                    <div className="col-sm-12 col-md-12 col-lg-9 " >
                        <section className="section-index-news">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-4 container-card" >
                                        <article className="card-news">
                                            <div className="card-header">
                                                { image_url === null ? <img src={Imagen_no_disponible} /> : <img src={image_url} /> }
                                            </div>
                                            <div className="card-body">
                                                <time className="article-date">{pubDate}</time>
                                                <h2>
                                                {title}
                                                </h2>
                                                <p>
                                                {description}
                                                </p>
                                                <div className="container-button">
                                                <a href={link} target="_blank" >
                                                    <button type="button" data-toggle="modal" data-target="#exampleModalCenter2">
                                                    Ir a la noticia
                                                    </button>
                                                </a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Noticia
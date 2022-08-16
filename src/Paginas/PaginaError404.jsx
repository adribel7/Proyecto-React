import imagen from "./bombita.png"

const PaginaError404 = () => {
    return (
        <main className="main-404">
        <div className="container">
          <div className="row justify-content-center align-content-center text-center ">
            <div className="col-sm-12 col-md-12 col-lg-9 " >
              <div className="container">
                <div className="row ">
                  <div className="col-sm-12 col-md-6 col-lg-6  " >
                    <div className="container-text">
                      <h1>Error 404</h1>
                      <span>Página no encontrada</span>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 " >
                    <div className="container-img-error">
                      <img src={imagen} alt="img"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}
export default PaginaError404;
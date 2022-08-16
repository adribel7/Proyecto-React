import "./estilos.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BuscarNoticiasPagina from './Paginas/BuscarNoticiasPagina';
import PaginaError404 from './Paginas/PaginaError404';

function App() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="buscador" element={<BuscarNoticiasPagina />} />
            <Route path="" element={<BuscarNoticiasPagina />} />
            <Route path="*" element={<PaginaError404/>} />
          </Routes>
        </BrowserRouter>
  );
    }

export default App;

import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useState } from "react";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {

    const [contador, setContador] = useState(1)

    const aumentarPagina = () => setContador(contador + 1)
    const disminuirPagina = () => setContador(contador - 1)
    const reiniciarPagina = () => setContador(1)

    console.log(contador);
    

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger">Test Button</button>
        </div>
        <Filtros />
        <Paginacion aumentarPagina={aumentarPagina} disminuirPagina={disminuirPagina}/>
        <GrillaPersonajes numeroPagina={contador} reiniciarPagina={setContador} />
        <Paginacion aumentarPagina={aumentarPagina} disminuirPagina={disminuirPagina}/>
    </div>
}

export default PaginaInicio
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente+
 * @author Julian Alvarado
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = (props :any): JSX.Element => {

    return <div className="paginacion">
        <button disabled={props.numeroPagina === 1 ? true : false} className={"primary"} onClick={() => {props.disminuirPagina()}}>Anterior</button>
        <button disabled={false} className={"primary"} onClick={() => props.aumentarPagina()}>Siguiente</button>
    </div>
}

export default Paginacion;
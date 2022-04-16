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
const Paginacion = (): JSX.Element => {

    return <div className="paginacion">
        <button disabled={true} className={"primary"}>Anterior</button>
        <button disabled={false} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;
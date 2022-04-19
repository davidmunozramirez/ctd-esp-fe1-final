import './boton-favorito.css';

export interface BotonFavoritoProps {
    esFavorito: boolean,    
    onClick : any ;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @author Julian Alvarado
 * @param {Boolean} esFavorito Recibe un booleano  
 * @param {function} onClick Recibe una función desde el Store
 * @returns {JSX.Element}
 */

const BotonFavorito = ({esFavorito, onClick} : BotonFavoritoProps): JSX.Element => {


    
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    

    return <div className="boton-favorito">
        <img src={src} alt={"favorito"} onClick={onClick}/>
    </div>
}

export default BotonFavorito;
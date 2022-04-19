import { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { anadirFavorito } from '../../actions/actions';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';


/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = (props :any) => {

    const [esFavorito, setEsFavorito] = useState(false)
    const dispatch = useDispatch()

    const onClick = () => {
        
        setEsFavorito(!esFavorito)
        dispatch(anadirFavorito(props.personaje))
    }

    

    
    return <div className="tarjeta-personaje">
        <img src={props.data.image} alt={props.data}/>
        <div className="tarjeta-personaje-body">
            <span>{props.data.name}</span>
            <p></p>
            <BotonFavorito esFavorito={esFavorito} onClick={onClick} />
        </div>
    </div>
}






export default TarjetaPersonaje;
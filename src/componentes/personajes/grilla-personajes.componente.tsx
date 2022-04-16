import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPersonaje } from '../../queries/personajesQueries';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */




const GrillaPersonajes = () => {
    
    const nombrePersonaje = useSelector((state: any) => state.personaje.busqueda)
    const [personajeBuscados, setPersonajeBuscados]:any = useState([]);

    useEffect(() =>{ 

        getPersonaje(nombrePersonaje).then((data) => 
        {
            console.log("data, desde grilla", data.results);
            setPersonajeBuscados(data.results)}
        );

        console.log(personajeBuscados);

    },[nombrePersonaje])


    return <div className="grilla-personajes">
        {
        personajeBuscados?.map((personajito:any, index:any) => {
            return <TarjetaPersonaje data={personajito} key={index}/>
        })}
    </div>
}

export default GrillaPersonajes;
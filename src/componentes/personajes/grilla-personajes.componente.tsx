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




const GrillaPersonajes = (props : any) => {
    
    const nombrePersonaje = useSelector((state: any) => state.personaje.busqueda)
    const [personajeBuscados, setPersonajeBuscados]:any = useState([]);

    console.log("Este es afuera",props.numeroPagina);

    
    const pivote = nombrePersonaje
    
    useEffect(() =>{ 


        console.log("Este es adentro",props.numeroPagina);
        getPersonaje(nombrePersonaje, props.numeroPagina).then((data) => 
        {
            console.log("data, desde grilla", data.info);
            setPersonajeBuscados(data.results)
        }
        );

        if (nombrePersonaje && nombrePersonaje) {
            props.reiniciarPagina(1)
            
        }
        
        console.log(personajeBuscados);
        
    },[nombrePersonaje, props.numeroPagina])
    

    return personajeBuscados ?(
        <div className="grilla-personajes">
        {
            personajeBuscados?.map((personajito:any, index:any) => {
                return <TarjetaPersonaje data={personajito} key={index}/>
            })
        }
        </div>
    ) : <p className="error"> Por favor realiza una busqueda válida </p>
}

export default GrillaPersonajes;
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './filtros.css';
import { buscarPersonaje } from '../../actions/actions';

const Filtros = (): JSX.Element=> {

    const dispatch = useDispatch()
    const [textoBusqueda, setTextoBusqueda] = useState<string>("")

    console.log(textoBusqueda)
    
    const CARACTERES_MINIMOS:number = 3 

    const ejecutarBuscador = () =>{
        
        if (textoBusqueda.length > CARACTERES_MINIMOS){
            dispatch(buscarPersonaje(textoBusqueda))
        }

        if (textoBusqueda.length == 0){
            dispatch(buscarPersonaje(""))
        }
        
        
    }
    
    useEffect(() =>{ 
        ejecutarBuscador() 
    },[textoBusqueda]
    )
    
    

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={(e) => {
            setTextoBusqueda(e.target.value)
        }}/>
    </div>
}

export default Filtros;
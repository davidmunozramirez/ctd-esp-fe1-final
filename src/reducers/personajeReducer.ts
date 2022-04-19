import { AnadirFavoritoType, BuscarPersonajeType } from "../actions/actions"
import { Personaje, PersonajeWithProps } from "../types/personaje.type"

export type PersonajeState = {
    busqueda: string;
    personajeSeleccionado: Personaje | null;
    personajesFavoritos: Personaje[]

}

const initialState: PersonajeState = {
    busqueda: "",
    personajeSeleccionado: null,
    personajesFavoritos: []

}

const personajeReducer = (state: PersonajeState = initialState, action: BuscarPersonajeType | AnadirFavoritoType) => {
    switch(action.type){
        case "BUSCAR_PERSONAJE":
            return{...state, busqueda: action.payload.name, }
        case "ANADIR_FAVORITO":
            return{...state, 
                personajesFavoritos: [...state.personajesFavoritos, action.payload.personaje]}    
        default: return state
    }
}



export default personajeReducer;
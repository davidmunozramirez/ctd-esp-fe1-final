import { BuscarPersonajeType } from "../actions/actions"
import { Personaje, PersonajeWithProps } from "../types/personaje.type"

export type PersonajeState = {
    busqueda: string;
    personajeSeleccionado: Personaje | null;

}

const initialState: PersonajeState = {
    busqueda: "",
    personajeSeleccionado: null,

}

const personajeReducer = (state: PersonajeState = initialState, action: BuscarPersonajeType) => {
    switch(action.type){
        case "BUSCAR_PERSONAJE":
            return{...state, busqueda: action.payload.name, }
        default: return state
    }
}



export default personajeReducer;
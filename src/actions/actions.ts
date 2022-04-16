import { Personaje, PersonajeWithProps } from "../types/personaje.type"

export type BuscarPersonajeType = {
    type: "BUSCAR_PERSONAJE",
    payload: {name: string}
}

export const buscarPersonaje = (name: string): BuscarPersonajeType =>{
    return{
        type: "BUSCAR_PERSONAJE",
        payload: {name : name}
    }
}
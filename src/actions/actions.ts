import { Personaje, PersonajeWithProps } from "../types/personaje.type"

export type BuscarPersonajeType = {
    type: "BUSCAR_PERSONAJE",
    payload: {name: string, numeroPagina: number}
}


export const buscarPersonaje = (name: string, numeroRecibido: number = 1): BuscarPersonajeType =>{
    return{
        type: "BUSCAR_PERSONAJE",
        payload: {name : name, numeroPagina: numeroRecibido}
    }
}

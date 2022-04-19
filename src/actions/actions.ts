import { Personaje, PersonajeWithProps } from "../types/personaje.type"

export type BuscarPersonajeType = {
    type: "BUSCAR_PERSONAJE",
    payload: {name: string}
}

export type AnadirFavoritoType = {
    type: "ANADIR_FAVORITO",
    payload: {personaje: Personaje}
}


export const buscarPersonaje = (name: string): BuscarPersonajeType =>{
    return{
        type: "BUSCAR_PERSONAJE",
        payload: {name : name}
    }
}

export const anadirFavorito = (personaje: Personaje): AnadirFavoritoType =>{
    return{
        type: "ANADIR_FAVORITO",
        payload: {personaje : personaje}
    }
}

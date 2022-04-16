import {Image} from "./imagen.types"
/**
* Represents a pokemon
*
* @author Julian Alvarado
* @see https://rickandmortyapi.com/api/character
*/

export interface Personaje {
    name: string;
    url: string;
}

export interface PersonajeWithProps {
    results(results: any): void | PromiseLike<void>;
}
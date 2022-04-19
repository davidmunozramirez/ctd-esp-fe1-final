import { Personaje, PersonajeWithProps } from "../types/personaje.type";

export const getPersonajes = async (): Promise<Personaje[]> => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json()
    return data.results;
}

export const buscarPersonajes = async (personajeName: string): Promise<Personaje[]> => {
    const data = await getPersonajes();
    return data.filter(personaje => !personajeName || personaje.name?.toLocaleLowerCase().startsWith(personajeName?.toLocaleLowerCase()))
}


export const getPersonajeEspecifico = async (personajeName: string): Promise<any> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=1&name=${personajeName}`);
    const data = await response.json();
    return data;
}

export const getPersonaje = async (personajeName: string, numeroPagina :number): Promise<any> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${numeroPagina}&name=${personajeName}`);
    const data = await response.json();
    return data;
}


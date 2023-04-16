import { Pokemon } from "./pokemon";

export const POKEMONS : Pokemon[] = [
    {
        id: 1,
        name: 'Bullbizarre',
        hp: 25,
        cp: 5,
     
        rarete:"*",
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        types: ["Plante", "Poison"],
        created: new Date()
    },
    {
        id: 2,
        name: 'Bizbiz',
        hp: 28,
        cp: 6,
        rarete:"**",
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png',
        types: ["Terre"],
        created: new Date()
    },
    {
        id: 3,
        name: 'Roucool',
        hp: 30,
        cp: 4,
     
        rarete:"***",
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png',
        types: ["Normal", "Vol"],
        created: new Date()
    },
    {
        id: 4,
        name: 'Rattata',
        hp: 27,
        cp: 5,
        rarete:"****",
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
        types: ["Eau"],
        created: new Date()
    },
    {
        id: 5,
        name: 'Sheesh',
        hp: 18,
        cp: 7,
        rarete:"*****",
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
        types: ["Feu"],
        created: new Date()
    },
    {
        id: 6,
        name: 'Pikachu',
        hp: 28,
        cp: 7,
        rarete:"**",
        picture: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
        types: ["Electrique"],
        created: new Date()

    },
]
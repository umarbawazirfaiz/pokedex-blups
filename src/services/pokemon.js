const URL = 'https://graphql-pokemon2.vercel.app';

export const getPokemons = (offset) => {
  const GET_POKEMONS = `
  {
    pokemons(first: ${offset}){
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      attacks {
        fast { name type damage }
        special { name type damage }
      }
      image
      evolutions {
        id
        name
        image
      }
    }
  }
`;

  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: GET_POKEMONS
    })
  })
  .then((res) => res.json());
};

export const getPokemon = (name) => {
  const GET_POKEMON = `
  {
    pokemon(name: "${name}"){
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      attacks {
        fast { name type damage }
        special { name type damage }
      }
      image
      evolutions {
        id
        name
        image
      }
    }
  }
`;

  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: GET_POKEMON
    })
  })
  .then((res) => res.json());
};


import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonDetail from "../components/PokemonDetail";
import { useParams } from "react-router-dom";
import { getPokemon } from "../services/pokemon";

const Pokemon = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({
        name: "",
        image: "",
        weight: {
          minimum: "",
          maximum: "",
        },
        height: {
          minimum: "",
          maximum: "",
        },
        attacks: {
          fast: [],
          special: [],
        },
        types: [],
        resistant: [],
        weaknesses: [],
        evolutions: []
      });

    useEffect(() => {
        fetchData();
    }, [name])

    const fetchData = async () => {
        const response = await getPokemon(name);
        setPokemon(response.data.pokemon);
    }

    return(
        <>
        <Header />
        <div className="container">
            <PokemonDetail pokemon={pokemon}/>
        </div>
        </>
    )
};

export default Pokemon;
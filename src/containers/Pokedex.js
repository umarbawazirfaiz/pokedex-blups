import React, { Component } from "react";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
    return(
        <>
        <Header />
        <div className="container">
            <PokemonList />
        </div>
        </>
    )
};
  
export default Pokedex;
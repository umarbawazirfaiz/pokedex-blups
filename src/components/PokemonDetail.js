import React, { Component } from "react";

import PokemonCard from "./PokemonCard";

class PokemonDetail extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="pokemon-detail">
        <div className="overview">
          <div className="image">
            <img className="active" src={pokemon.image} alt={pokemon.name} />
          </div>
          {pokemon.evolutions !== null && (
            <>
              <h3>Evolutions</h3>
              <div className="evolutions-container">
                {pokemon.evolutions.map((pokemon, index) => (
                  <PokemonCard
                    key={pokemon.name}
                    id={index + 1}
                    pokemon={pokemon}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="info">
          <h2>{pokemon.name}</h2>
          <div className="box">
            <div className="left">
              <div className="row flex flex-flow-column">
                <span className="title">Height</span>
                <span className="value">
                  {pokemon.height.minimum} -{pokemon.height.maximum}
                </span>
              </div>
              <div className="row flex flex-flow-column">
                <span className="title">Weight</span>
                <span className="value">
                  {pokemon.weight.minimum} -{pokemon.weight.maximum}
                </span>
              </div>
              <div className="row flex flex-flow-column">
                <span className="title">Classification</span>
                <span className="value">{pokemon.classification}</span>
              </div>
              <div className="row flex flex-flow-column">
                <span className="title">Fast attacks</span>
                <span className="value">
                  <ul>
                    {pokemon.attacks.fast.map((item) => (
                      <li key={item.name}>
                        {item.name} - {item.type}
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
              <div className="row flex flex-flow-column">
                <span className="title">Special attacks</span>
                <span className="value">
                  <ul>
                    {pokemon.attacks.special.map((item) => (
                      <li key={item.name}>
                        {item.name} - {item.type}
                      </li>
                    ))}
                  </ul>
                </span>
              </div>
            </div>
          </div>
          <h3>Types</h3>
          <ul className="attribute">
            {pokemon.types.map((name, index) => (
              <li key={`attribute-${index}`} className={name.toLowerCase()}>
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <h3>Weaknesses</h3>
          <ul className="attribute">
            {pokemon.weaknesses.map((name, index) => (
              <li key={`weaknesses-${index}`} className={name.toLowerCase()}>
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <h3>Resistances</h3>
          <ul className="attribute">
            {pokemon.resistant.map((name, index) => (
              <li key={`resistant-${index}`} className={name.toLowerCase()}>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default PokemonDetail;

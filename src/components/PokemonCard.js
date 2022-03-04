import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PokemonCard extends Component {
    render() {
        const { pokemon, id } = this.props;

        return (
            <Link to={`/pokemon/${pokemon.name}`} className="pokemon-container">
                <div className="pokemon-image">
                    <img src={pokemon.image} alt="" />
                </div>
                <div className="pokemon-name">{pokemon.name}</div>
            </Link>
        )
    }
}

export default PokemonCard
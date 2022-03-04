import React, { Component } from "react";
import PokemonCard from './PokemonCard';
import InfiniteScroll from "react-infinite-scroll-component";
import { getPokemons } from '../services/pokemon';
import { PulseBubbleLoader } from 'react-loaders-kit';

class PokemonList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pokemons : [],
            loading : false,
            offset : 20,
        };
    }

    async componentDidMount() {
        this.setState({
            loading : true
        });

        const response = await getPokemons(this.state.offset);

        this.setState({
            pokemons : response.data.pokemons,
            loading : false,
            offset: this.state.offset + 20,
        });
    }

    fetchMoreData = async () => {
        this.setState({
            loading : true
        });

        const response = await getPokemons(this.state.offset);

        setTimeout(() => {
            this.setState({
                pokemons : response.data.pokemons,
                loading : false,
                offset: this.state.offset + 20,
            });
        }, 2500);
    };

    render() {
        const {pokemons} = this.state;

        const loaderProps = {
            loading: true,
            size: 35,
            duration: 1,
            colors: ['#5e22f0', '#f6b93b']
        }

        return (
        <InfiniteScroll
            dataLength={pokemons.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<div className="load-more"><PulseBubbleLoader {...loaderProps} /></div>}
            >
            <div className="pokemon-list">{
                pokemons.map((pokemon, index)=><PokemonCard key={pokemon.name} id={index+1} pokemon={pokemon}/>)
            }</div>
        </InfiniteScroll>
        );
    }
}

export default PokemonList;
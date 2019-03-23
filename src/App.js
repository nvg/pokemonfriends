import React, { Component } from 'react';

import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
// import { pokemons } from './pokemons.js';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            pokemons: [], // pokemons,
            search: ''
        }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json')
            .then(response => {
                return response.json();
            }).then(pokemons => {
                this.setState({ pokemons: pokemons.slice(1, 100) });
            });
    }

    onSearchChange = (event) => {
        this.setState({ search: event.target.value });
    }

    render() {
        const filteredPokemons = this.state.pokemons.filter(p => {
            return p.name.english.toLocaleLowerCase().includes(this.state.search.toLowerCase());
        });

        return (
            <div className='tc'>
                <h1>Pokemon Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList pokemons={filteredPokemons} />
                </Scroll>
            </div>
        )
    };
};
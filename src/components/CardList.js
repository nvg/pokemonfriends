import React from 'react';

import Card from './Card';

const CardList = ({ pokemons }) => {
    const cards = pokemons.map((pokemon, i) => {
        return <Card key={pokemons[i].id} id={pokemons[i].id} pokemon={pokemons[i]} />;
    })

    return (
        <div>
            {cards}
        </div>
    )
}

export default CardList;
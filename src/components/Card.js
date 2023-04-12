import React from 'react';
import './Card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            pokemon: props.pokemon
        }
        this.id = props.id;
        this.pokemon = props.pokemon;
    }

    pad(num) {
        var s = "000" + num;
        return s.substr(s.length - 3);
    }

    getImageUrl() {
        let name = this.pokemon.name.english;
        let cleanedName = '';
        for(let i in name) {
            let ch = name[i];
            if((ch>='A'&&ch<='Z')||(ch>='a'&&ch<='z')||(ch>='0'&&ch<='9')) {
                cleanedName += ch;
            }
        }
        // let cleanedChars = name.replace(/[\u{0080}-\u{FFFF}]/gu, "");
        return 'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/' + this.pad(this.id) + '.png';
    }

    render() {
        const type = this.pokemon.type.map((i) => {
            return i + ' ';
        })

        const base = Object.entries(this.pokemon.base).map(([key, value]) => {
            return <p key={key}>{key}: {value}</p>;
        })

        return (
            <div className='tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5 card'>
                <img alt='Pokemon' src={this.getImageUrl()} width='200' height='200'></img>
                <div>
                    <h2>{this.pokemon.name.english}</h2>
                    <div className='tl'>Type: {type}</div>
                    <hr />
                    <div className='tl'>{base}</div>
                </div>
            </div>
        )
    }
}

export default Card;

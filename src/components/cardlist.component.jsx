import React, { Component } from 'react';

import Card from './card/card.component'

import './card.css'

class CardList extends Component{

    render(){
        return(
            <div className="card">
                {this.props.monsters.map( monster => (
                    <Card key={monster.id} itr = {monster} />
                ))} 
            </div>
        );
    }
}

export default CardList;
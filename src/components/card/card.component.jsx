import React, { Component } from 'react'

class Card extends Component{
    
    render(){
        return(
           <div>
                <img alt = "monster" src = {`https://robohash.org/${this.props.itr.id}`} />
                <h3>{this.props.itr.name}</h3>
                <small>{this.props.itr.email}</small>
           </div>
        );
    }

}

export default Card;
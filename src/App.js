import React, { Component } from 'react';
import './App.css';
import CardList from './components/cardlist.component';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monster: []
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({ monster: users}))
  }
  render(){
    return(
      <div className="App">
        <CardList monsters = {this.state.monster}></CardList> 
      </div>
    );
  };

}

export default App;

import React from 'react';
import './App.css';
import Pokemon from './Pokemon';

// make a page that lets us increase or decrease how many pokemon are on screen
// - app component needs to keep track of how many pokemon to show
// - iterate over a single, DRY modular Pokemon count
// - button to increase pokemon count
// - button to decrease pokemon count

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      pokemonCount: 3
    }
  }

  exampleFunction(){
    console.log("Hello world from button click")
  }

  decreasePokemonCount(currentCount){
    if (currentCount > 0){
      this.setState({pokemonCount: this.state.pokemonCount - 1});
    }
  }

  render(){
    return (
      <div>
      <h1>Pokemon page</h1>

      {/* <button onClick={this.exampleFunction}>Increase Pokemon count</button>
      <button onClick={() => (console.log("Hello world from inline expression"))}>Decrease Pokemon count</button> */}

      <button onClick={() => {this.setState({pokemonCount: this.state.pokemonCount + 1})}}>Increase Pokemon count</button>
      <button onClick={() => this.decreasePokemonCount(this.state.pokemonCount)}>
        Decrease Pokemon count
      </button>

      {
        Array(this.state.pokemonCount).fill(null).map(() => <Pokemon />)
      }
      <Pokemon></Pokemon>
    </div>
    )


  }
}

export default App;

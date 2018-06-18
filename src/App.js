import React, { Component } from 'react';
import './App.css';
import SearchMovie from './views/SearchMovie';

// eslint-disable-next-line prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">trouvaille</h1>
          <h6> ~ Kirti Jalan </h6>
        </header>
        <p>Movie Checklist </p>
        <SearchMovie />
      </div>
    );
  }
}

//  App;

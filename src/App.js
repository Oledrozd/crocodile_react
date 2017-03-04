import React, { Component } from 'react';
import PreviousWords from './components/PreviousWords/PreviousWords';
import Results from './components/Results/Results';
import GameBoard from './components/GameBoard/GameBoard';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="container">
                <Results />
                <GameBoard />
                <PreviousWords />
            </div>
        );
    }
}

export default App;

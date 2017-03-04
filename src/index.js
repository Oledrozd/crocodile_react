import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import crocodileReducer from './reducers';
import App from './App';
import './index.css';

const initialState = {
    actualWord: {
        isFetched: false,
        word: ''
    },
    previousWords: {
        answeredWords: [],
        unansweredWords: []
    },
    roundData: {
        timerValue: 60,
        isRoundFinished: false,
        rightAnswersAmount: 0
    },
    teamsData: {
        teams: [{
            id: 0,
            name: 'Team 1',
            actualResult: 0
        },
        {
            id: 1,
            name: 'Team 2',
            actualResult: 0
        }],
        currTeamID: 0
    }

};

let store = createStore(crocodileReducer, initialState, applyMiddleware(
    thunkMiddleware
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

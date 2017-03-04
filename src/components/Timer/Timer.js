import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../actions/actions.js';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props);
    }

    startTimer() {
        let actions = this.props.actions;
        let timerDelay = 1000;
        let minTimerValue = 0;

        this.roundTimer = setInterval(() => {
            let store = this.props.store;
            let nextTimerValue = store.roundData.timerValue - 1;
            let isTimerFinished = nextTimerValue < minTimerValue;

            if (store.roundData.isRoundFinished) return;

            if (isTimerFinished) {
                actions.updateResults(store.roundData.rightAnswersAmount, store.teamsData.currTeamID);
                actions.finishTimer();

                return;
            }

            actions.decreaseTimer(nextTimerValue);

        }, timerDelay)
    }

    componentWillMount() {
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.roundTimer);
    }

    render() {
        let timerValue = this.props.store.roundData.timerValue;
        let timerColor = timerValue < 10 ? 'red' : 'green';

        return (
            <div style={{color: timerColor}} className="timer">{timerValue}</div>
        )
    }
}

export default connect(
    store => ({store: store}),
    dispatch => ({actions: bindActionCreators(Actions, dispatch)})
)(Timer);
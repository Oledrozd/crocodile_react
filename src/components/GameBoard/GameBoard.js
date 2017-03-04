import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../actions/actions.js';
import Timer from '../Timer/Timer.js';
import Word from '../Word/Word.js';
import NextRoundPanel from '../NextRoundPanel/NextRoundPanel.js';
import Button from '../Button/Button.js';
import logo from '../../img/croc-logo.png';
import './GameBoard.css';

class GameBoard extends Component {
    constructor(props) {
        super(props);

        this.startNewRound = this.startNewRound.bind(this);
        this.handleAnsweredClick = this.handleAnsweredClick.bind(this);
        this.handleUnansweredClick = this.handleUnansweredClick.bind(this);
    }

    handleAnsweredClick() {
        let {actions, state} = this.props;

        actions.decreaseRightAnswer(state.roundData.rightAnswersAmount);
        actions.addWordToAnswered(state.actualWord.word);
        actions.fetchWord();
    }

    handleUnansweredClick() {
        let {actions, state} = this.props;

        actions.addWordToUnanswered(state.actualWord.word);
        actions.fetchWord();
    }

    startNewRound() {
        let {state, actions} = this.props;

        let maxTeamID = state.teamsData.teams.length - 1;
        let currTeamID = state.teamsData.currTeamID;
        let nextTeamID = currTeamID < maxTeamID ? currTeamID + 1 : 0;

        const ROUND_TIME = 60;

        actions.startTimer(ROUND_TIME);
        actions.switchTeam(nextTeamID);
        actions.fetchWord();
    }

    componentDidMount() {
        let actions = this.props.actions;

        actions.fetchWord();
    }

    render() {
        let state = this.props.state;

        const UNANSWERED_BUTTON_COLOR = 'red';
        const ANSWERED_BUTTON_COLOR = 'green';

        return (
            <div className="board">
                <NextRoundPanel showPanel={state.roundData.isRoundFinished} startNewRound={this.startNewRound} />

                <div className="logo-wrapper">
                    <img className="logo-wrapper__logo" alt="" src={logo} />
                </div>

                <Timer />

                <Word currWord={state.actualWord.word} />

                <div className="board__button-container">
                    <Button onClick={this.handleUnansweredClick} text="&#10007;" color={UNANSWERED_BUTTON_COLOR} />
                    <Button onClick={this.handleAnsweredClick} text="&#10003;" color={ANSWERED_BUTTON_COLOR} />
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({state: state}),
    dispatch => ({actions: bindActionCreators(Actions, dispatch)})
)(GameBoard);
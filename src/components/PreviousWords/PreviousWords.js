import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../actions/actions.js';
import WordsList from '../WordsList/WordsList.js';
import './PreviousWords.css';

class PreviousWords extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let previousWords = this.props.state.previousWords;

        return (
            <div className="previous-words">
                <WordsList words={previousWords.answeredWords} header="answered words" />
                <WordsList words={previousWords.unansweredWords} header="unanswered words" />
            </div>
        )
    }
}

export default connect(
    state => ({state: state}),
    dispatch => ({Actions, dispatch})
)(PreviousWords);
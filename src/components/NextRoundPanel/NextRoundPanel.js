import React, {Component} from 'react';
import './NextRoundPanel.css';

const NextRoundPanel = props => {
    return (
        props.showPanel &&
        <div className="next-round-panel">
            <span onClick={props.startNewRound} className="next-round-panel__button">Next round</span>
        </div>
    )
};

export default NextRoundPanel;
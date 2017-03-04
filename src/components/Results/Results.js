import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../../actions/actions.js';
import './Results.css';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {store, actions} = this.props;

        let teams = store.teamsData.teams.map(team => {
            let currTeam = store.teamsData.currTeamID === team.id;
            let teamClass = currTeam ? " results-list__item-active" : "";

            return (
                <li key={team.id} className={"results-list__item" + teamClass}>
                    {team.name}: {team.actualResult}
                </li>
            )
        });

        return (
            <div className="results">
                <ul className="results-list">
                    {teams}
                </ul>
            </div>
        )
    }
}

export default connect(
    store => ({store: store}),
    dispatch => ({actions: bindActionCreators(Actions, dispatch)})
)(Results);
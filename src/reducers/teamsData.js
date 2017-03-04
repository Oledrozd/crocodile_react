const teamsData = (state={}, action='') => {
    switch(action.type) {
        case 'SWITCH_TEAM':
            return Object.assign({}, state, {
                currTeamID: action.currTeamID
            });
        case 'UPDATE_TEAM_RESULT':
            return Object.assign({}, state, {
                teams: state.teams.map(team => {
                    if (team.id === action.teamID) {
                        return Object.assign({}, team, {
                            actualResult: team.actualResult + action.rightAnswers
                        })
                    }
                    return team;
                })
            });
        default:
            return state;
    }
};

export default teamsData;
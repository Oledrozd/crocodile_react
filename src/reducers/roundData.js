const roundData = (state={}, action='') => {
    switch(action.type) {
        case 'FINISH_TIMER':
            return Object.assign({}, state, {
                isRoundFinished: action.isRoundFinished,
                rightAnswersAmount: action.rightAnswersAmount
            });
        case 'START_TIMER':
            return Object.assign({}, state, {
                isRoundFinished: action.isRoundFinished,
                timerValue: action.timerValue
            });
        case 'DECREASE_TIMER':
            return Object.assign({}, state, {
                timerValue: action.timerValue
            });
        case 'DECREASE_RIGHT_ANSWERS':
            return Object.assign({}, state, {
                rightAnswersAmount: action.rightAnswersAmount + 1
            });
        default:
            return state;
    }
};

export default roundData;
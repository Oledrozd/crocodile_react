const previousWords = (state={}, action='') => {
    switch(action.type) {
        case 'ADD_WORD_TO_ANSWERED':
            return Object.assign({}, state, {
                answeredWords: [...state.answeredWords, action.actualWord]
            });
        case 'ADD_WORD_TO_UNANSWERED':
            return Object.assign({}, state, {
                unansweredWords: [...state.unansweredWords, action.actualWord]
            });
        default:
            return state;
    }
};

export default previousWords;
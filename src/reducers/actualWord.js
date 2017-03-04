const actualWord = (state={}, action='') => {
    switch(action.type) {
        case 'REQUEST_WORD':
            return Object.assign({}, state, {
                isFetched: action.status
            });
        case 'RECEIVE_WORD':
            return Object.assign({}, state, {
                isFetched: action.status,
                word: action.actualWord
            });
        default:
            return state;
    }
};

export default actualWord;
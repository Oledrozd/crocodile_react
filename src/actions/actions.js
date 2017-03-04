import fetch from 'isomorphic-fetch';

const randomWordsURL = `http://www.setgetgo.com/randomword/get.php`;

function requestWord(status) {
    return {
        type: 'REQUEST_WORD',
        isFetched: status
    }
}

function receiveWord(status, word) {
    return {
        type: 'RECEIVE_WORD',
        isFetched: status,
        actualWord: word
    }
}

export function addWordToAnswered(word) {
    return {
        type: 'ADD_WORD_TO_ANSWERED',
        actualWord: word
    }
}

export function addWordToUnanswered(word) {
    return {
        type: 'ADD_WORD_TO_UNANSWERED',
        actualWord: word
    }
}

export function finishTimer() {
    return {
        type: 'FINISH_TIMER',
        isRoundFinished: true,
        rightAnswersAmount: 0
    }
}

export function startTimer(timerValue) {
    return {
        type: 'START_TIMER',
        isRoundFinished: false,
        timerValue: timerValue
    }
}

export function decreaseTimer(timerValue) {
    return {
        type: 'DECREASE_TIMER',
        timerValue: timerValue
    }
}

export function decreaseRightAnswer(rightAnswersAmount) {
    return {
        type: 'DECREASE_RIGHT_ANSWERS',
        rightAnswersAmount: rightAnswersAmount
    }
}

export function switchTeam(currTeamId) {
    return {
        type: 'SWITCH_TEAM',
        currTeamID: currTeamId
    }
}

export function updateResults(rightAnswers, teamID) {
    return {
        type: 'UPDATE_TEAM_RESULT',
        rightAnswers: rightAnswers,
        teamID: teamID
    }
}

//middlewares
export function fetchWord() {
    return dispatch => {
        dispatch(requestWord(true));
        return fetch(`${randomWordsURL}?len=7`)
            .then(response => response.text())
            .then(text => dispatch(receiveWord(false, text)))
    }
}
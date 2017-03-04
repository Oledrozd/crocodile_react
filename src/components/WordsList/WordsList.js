import React, { Component } from 'react';
import './WordsList.css';

const WordsList = props => {
    let words = props.words.map((word, wordIndex) => {
        return <li key={wordIndex} className="words-list__item">{word}</li>
    }).reverse();

    return (
        <div className="words-list-wrapper">
            <div className="words-list-header">{props.header}</div>

            <ul className="words-list">
                {words}
            </ul>
        </div>

    )
};

export default WordsList;
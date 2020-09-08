import React, { useState } from 'react';

import Question from '../components/Question';
import Choices from '../components/Choices';

export default function Gameboard(props) {
    const [isReady, setIsReady] = useState(false)

    let trivia = props.triviaList.pop()
    // let choices = trivia

    console.log(props.triviaList)
    let loading = (
        <div>
            <h3>Waiting for more players to join...</h3>
        </div>
    )

    let gameStart = (
        <div>
            <Question />
            <Choices choices={props.triviaList} />
        </div>
    )

    let display = isReady ? gameStart : loading;


    return (
        <div>
            {display}
        </div>
    )
}
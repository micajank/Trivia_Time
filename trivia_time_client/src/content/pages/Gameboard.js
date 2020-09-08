import React, { useState } from 'react';

import Question from '../components/Question';
import Choices from '../components/Choices';

export default function Gameboard(props) {
    // const [isReady, setIsReady] = useState(false)
    let triviaTemp = {
          "results": [
          {
              "category": "General Knowledge",
              "type": "multiple",
              "difficulty": "easy",
              "question": "Which country, not including Japan, has the most people of japanese decent?",
              "correct_answer": "Brazil",
              "incorrect_answers": [
              "China",
              "South Korea",
              "United States of America"
            ]
            },
            {
              "category": "General Knowledge",
              "type": "multiple",
              "difficulty": "easy",
              "question": "Terry Gilliam was an animator that worked with which British comedy group?",
              "correct_answer": "Monty Python",
              "incorrect_answers": [
              "The Goodies&lrm;",
              "The League of Gentlemen&lrm;",
              "The Penny Dreadfuls"
            ]
            },
            {
              "category": "General Knowledge",
              "type": "multiple",
              "difficulty": "easy",
              "question": "When one is &quot;envious&quot;, they are said to be what color?",
              "correct_answer": "Green",
              "incorrect_answers": [
              "Red",
              "Blue",
              "Yellow"
              ]
              }
        ]}
        let triviaList = triviaTemp.results;
        let triviaNode = triviaList.pop()
        console.log(triviaNode)
        let choices = []
        choices.push(triviaNode.correct_answer)
        choices.push(triviaNode.incorrect_answers[0])
        choices.push(triviaNode.incorrect_answers[1])
        choices.push(triviaNode.incorrect_answers[2])
        let question = triviaNode.question;

    console.log(props.triviaList)
    let loading = (
        <div>
            <h3>Waiting for more players to join...</h3>
        </div>
    )

    let gameStart = (
        <div>
            <Question question={question} />
            <Choices choices={choices} />
        </div>
    )

    let display = props.isReady ? gameStart : loading;


    return (
        <div>
            {display}
        </div>
    )
}
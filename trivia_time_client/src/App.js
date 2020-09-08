import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './content/Content';
import Header from '../src/wrappers/Header';
import ClientSocket from '../src/ClientSocket'


// API to use: https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple

function App() {

  let triviaList = ["choice 1", "choice 2", "choice 3", "choice 4"];
  
  // let triviaTemp = {
  //   "results": [
  //   {
  //       "category": "General Knowledge",
  //       "type": "multiple",
  //       "difficulty": "easy",
  //       "question": "Which country, not including Japan, has the most people of japanese decent?",
  //       "correct_answer": "Brazil",
  //       "incorrect_answers": [
  //       "China",
  //       "South Korea",
  //       "United States of America"
  //     ]
  //     },
  //     {
  //       "category": "General Knowledge",
  //       "type": "multiple",
  //       "difficulty": "easy",
  //       "question": "Terry Gilliam was an animator that worked with which British comedy group?",
  //       "correct_answer": "Monty Python",
  //       "incorrect_answers": [
  //       "The Goodies&lrm;",
  //       "The League of Gentlemen&lrm;",
  //       "The Penny Dreadfuls"
  //     ]
  //     },
  //     {
  //       "category": "General Knowledge",
  //       "type": "multiple",
  //       "difficulty": "easy",
  //       "question": "When one is &quot;envious&quot;, they are said to be what color?",
  //       "correct_answer": "Green",
  //       "incorrect_answers": [
  //       "Red",
  //       "Blue",
  //       "Yellow"
  //       ]
  //       }
  // ]}
  // let triviaList = triviaTemp.results;

  const [loadClient, setLoadClient] = useState(true);
  const [isReady, setIsReady] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="quiz-area">
            {/* LOAD OR UNLOAD THE CLIENT */}
            <button onClick={() => setLoadClient(prevState => !prevState)}>
              STOP CLIENT
            </button>
            {/* SOCKET IO CLIENT*/}
          {loadClient ? <ClientSocket isReady={isReady} setIsReady={setIsReady} /> : null}
          <Content triviaList={triviaList} isReady={isReady} setIsReady={setIsReady}  />
        </main>
      </div>
    </Router>
  );
}

export default App;

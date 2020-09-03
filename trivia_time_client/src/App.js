import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../src/wrappers/Header';
import Content from './content/Content';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="quiz-area">
          <Content />
        </main>
      </div>
    </Router>
  );
}

export default App;

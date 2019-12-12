import React from 'react';
import HeaderPage from './HeaderPage/HeaderPage.js'
import CountStartPage from './CountStartPage/CountStartPage.js'
import ScanPage from './ScanPage/ScanPage.js'
import SummaryPage from './SummaryPage/SummaryPage.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router basename="/inventory-control">
      <div>
        <Route exact path="/" ><HeaderPage /></Route>
        <Route exact path="/start"><CountStartPage /></Route>
        <Route exact path="/scan"><ScanPage /></Route>
        <Route exact path="/summary"><SummaryPage /></Route>
      </div>
    </Router>
  );
}

export default App;
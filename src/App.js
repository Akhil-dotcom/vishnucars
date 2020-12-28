import React from 'react'
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Check from './Components/Check_Your_Skill/Check';

function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path="/check your ability" component={Check} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

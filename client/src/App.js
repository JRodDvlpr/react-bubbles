import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

//components
import BubblePage from './components/BubblePage';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">

        
        <Route exact path="/" component={Login} />
        
        {/* Protected Route for the bubbles page- must be logged in with token to access route*/}
        <PrivateRoute exact path='/bubbles' component={BubblePage} />

      </div>
    </Router>
  );
}

export default App;

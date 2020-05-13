import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import './App.css';
import Movie from './Movie';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}
const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Movie Finder 2</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MovieListContainer from '../view/containers/MovieListContainer';
import MovieDetailContainer from '../view/containers/MovieDetailContainer';


const RouterConfig = () => (
  <Router hashType="slash">
    <div>
      <Route exact path="/" component={MovieListContainer} />
      <Route path="/movies/:movieId" component={MovieDetailContainer} />
    </div>
  </Router>
);

export default RouterConfig;

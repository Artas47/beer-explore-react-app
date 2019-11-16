import React, { Component } from "react";
import Beers from "./Beers";
import { Router, Route } from "react-router-dom";
import BeerDetails from "./BeerDetails";
import history from "../history";
import Header from "./Header";
import { GlobalStyles } from "../styled-components/global-styles";

import * as S from "../styled-components/app";

class App extends Component {
  render() {
    return (
      <S.App>
        <GlobalStyles />
        <Header />
        <Router history={history}>
          <Route path="/" component={Beers} />
          <Route path="/beer/:id" component={BeerDetails} />
        </Router>
      </S.App>
    );
  }
}

export default App;

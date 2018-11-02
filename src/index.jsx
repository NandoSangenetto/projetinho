import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";

import Pais from "./components/Pais";
import LoadingSpinner from "./components/LoadingSpinner";
import Card from "./components/Card";

import CountryPage from "./components/CountryPage";
import ListPage from "./components/ListPage";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <ResetStyle />
    <GlobalStyle background="#ccc" />
    <Router>
      <Card>
        <Route path="/" exact component={ListPage} />
        <Route path="/:country" exact component={CountryPage} />
      </Card>
    </Router>
  </ApolloProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

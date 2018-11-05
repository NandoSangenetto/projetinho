import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";

import ResetStyle from "./components/ResetStyle";
import GlobalStyle from "./components/GlobalStyle";

import Card from "./components/Card";

import CountryPage from "./components/CountryPage";
import ListPage from "./components/ListPage";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql"
});

const theme = {
  primaryColor: "#334399"
};

const App = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <ResetStyle />
      <GlobalStyle background="#ccc" />
      <Card>
        <Router>
          <ListPage path="/" />
          <CountryPage path="/:country" />
        </Router>
      </Card>
    </ApolloProvider>
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

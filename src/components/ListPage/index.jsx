import React, { Component } from "react";
import { Query } from "react-apollo";

import { countriesQuery } from "../../services/queries";

import Link from "../Link";
import SearchBox from "../SearchBox";
import LoadingSpinner from "../LoadingSpinner";

class ListPage extends Component {
  state = {
    text: ""
  };

  onSearchChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <Query query={countriesQuery}>
        {({ error, data, loading }) => {
          if (loading) return <LoadingSpinner size="20px" color="black" />;
          if (error) return <div>Erro :(</div>;
          const { countries } = data;
          const filteredCountries = countries.filter(country =>
            country.name.toLowerCase().includes(this.state.text.toLowerCase())
          );

          return (
            <>
              <SearchBox
                placeholder="Filter country"
                onChange={this.onSearchChange}
                value={this.state.text}
              />
              <section>
                {filteredCountries.map(({ code, emoji, name }) => (
                  <Link to={`/${code.toLowerCase()}`}>
                    {emoji} {name}
                  </Link>
                ))}
                {filteredCountries.length === 0 &&
                  "Country not found, did you select the right world?"}
              </section>
            </>
          );
        }}
      </Query>
    );
  }
}

export default ListPage;
